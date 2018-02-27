const productionConfig = {
  apiKey: "AIzaSyAPgHMBYp4ZKPO-kbyWC3Ggfh8Za6e2CiA",
  authDomain: "comment-on-prod-8c9aa.firebaseapp.com",
  databaseURL: "https://comment-on-prod-8c9aa.firebaseio.com",
  projectId: "comment-on-prod-8c9aa",
  storageBucket: "comment-on-prod-8c9aa.appspot.com",
  messagingSenderId: "555648512993",
  cloudFunctionDomain: "https://us-central1-comment-on-prod-8c9aa.cloudfunctions.net"
};

const developmentConfig = {
  apiKey: "AIzaSyD-_qTEnH7-6KSLKtCPHLgdodwBTS45xus",
  authDomain: "comment-on-85597.firebaseapp.com",
  databaseURL: "https://comment-on-85597.firebaseio.com",
  projectId: "comment-on-85597",
  storageBucket: "comment-on-85597.appspot.com",
  messagingSenderId: "177107431871",
  cloudFunctionDomain: "https://us-central1-comment-on-85597.cloudfunctions.net"
};

const getConfig = () => {
  if(process.env.REACT_APP_ENV === 'production') {
    return productionConfig;
  }
  return developmentConfig;
}
export default getConfig;
