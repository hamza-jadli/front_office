const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: 'http://localhost:3001/admin/:path*',
      },
    ];
  },
}


