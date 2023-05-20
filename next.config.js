const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/admine/:path*',
        destination: 'https://dashboard-gcpn.vercel.app/admine/:path*',
      },
    ];
  },
}


