const vorpal = require('vorpal')()
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const kongAdminApi = 'http://localhost:8001'
const upstreams = ['lms', 'studio']

function checkIfUpstreamHasPlugin (name, pluginName) {
  return axios.get(`${kongAdminApi}/apis/${name}/plugins`).then(response => {
    response.data.data.forEach((plugin) => {
      if (pluginName === plugin.name) {
        return Promise.resolve(true)
      }
    })
    return Promise.resolve(false)
  }).catch(() => {
    return Promise.reject('request error, try again')
  })
}

function addRequestTerminationToUpstream (name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, './dist/index.html'), 'utf8', (err, data) => {
      if (err) {
        reject('an error occurred when reading index.html!')
      }

      return axios.post(`${kongAdminApi}/apis/${name}/plugins`, {
        name: 'request-termination',
        config: {
          status_code: 503,
          body: data,
          content_type: 'text/html charset=utf-8;',
        },
      }).then(() => {
        resolve('done')
      }).catch(() => {
        reject('failed')
      })
    })
  })
}

function removeRequestTermination (name) {
  return axios.delete(`${kongAdminApi}/apis/${name}/plugins/request-termination`).then(() => {
    return Promise.resolve(true)
  }).catch(e => {
    console.log(e)
    return Promise.reject('request error, try again')
  })
}

vorpal
  .command('get <upstream> <plugin>', 'check if upstream has the specified plugin or not')
  .action(function (args, cb) {
    checkIfUpstreamHasPlugin(args.upstream, args.plugin).then(response => {
      if (response === true) {
        this.log('plugin has been found on upstream')
      } else {
        this.log('plugin not found')
      }
      cb()
    }).catch(error => {
      this.log(error)
      cb()
    })
  })

vorpal
  .command('add <upstream>', 'add request-termination plugin to specified upstream')
  .option('-c, --check', 'check if upstream has the specified plugin')
  .action(function (args, cb) {
    if (upstreams.includes(args.upstream)) {
      if (args.options.check) {
        checkIfUpstreamHasPlugin(args.upstream, 'request-termination').then(response => {
          if (response === true) {
            this.log('request termination plugin is already added')
            cb()
            return
          }
        })
      }

      addRequestTerminationToUpstream(args.upstream).then(response => {
        this.log(response)
        cb()
      }).catch(error => {
        this.log(error)
        cb()
      })
    }
  })

vorpal
  .command('rm <upstream>', 'remove request-termination plugin from the specified upstream')
  .action(function (args, cb) {
    if (upstreams.includes(args.upstream)) {
      removeRequestTermination(args.upstream).then(() => {
        this.log(`request termination plugin has been removed from ${args.upstream} upstream`)
        cb()
      }).catch(() => {
        this.log('an error occurred')
        cb()
      })
    }
  })

vorpal.show()
