const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: 'https://front-office-phi.vercel.app/admin/:path*',
      },
    ];
  },
}


