/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/QuestionBot',
          permanent: false,
        },
      ]
    },
  }