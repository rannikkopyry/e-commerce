module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_APP_CHEC_PUBLIC_KEY": JSON.stringify(
        process.env.REACT_APP_CHEC_PUBLIC_KEY
      ),
      "process.env.REACT_APP_STRIPE_PUBLIC_KEY": JSON.stringify(
        process.env.REACT_APP_STRIPE_PUBLIC_KEY
      ),
    }),
  ],
};
