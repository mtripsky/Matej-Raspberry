module.exports = {
  apps: [{
    name: 'matej-raspberry',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-15-179-48.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/id_rsa.pub',
      ref: 'origin/master',
      repo: 'https://github.com/mtripsky/Matej-Raspberry.git',
      path: '/home/ubuntu/Matej-Raspberry',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
