import vismaPay from 'visma-pay';

vismaPay.setPrivateKey(PROCESS.ENV.REACT_APP_VISMA_PRIVATE_KEY);
vismaPay.setApiKey(PROCESS.ENV.REACT_APP_VISMA_API_KEY);
