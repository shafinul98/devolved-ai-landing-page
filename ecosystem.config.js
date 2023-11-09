module.exports = {
  apps: [
    {
      name: 'devolvedai-frontend',
      script: 'npm',
      args: 'run dev',
      watch: true, // Enable automatic server restart on file changes
      ignore_watch: ['node_modules', 'logs'], // Ignore specific directories
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // Customize log date format
    }
  ],
};