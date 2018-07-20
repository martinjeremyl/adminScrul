import React from 'react';
import { HydraAdmin } from '@api-platform/admin';

//export default () => <HydraAdmin entrypoint={process.env.REACT_APP_API_ENTRYPOINT}/>;
export default () => <HydraAdmin entrypoint='https://vps507792.ovh.net:8443'/>;
