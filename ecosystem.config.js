module.exports = {
  apps: [
    {
      name: 'jaxium-social-network',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
