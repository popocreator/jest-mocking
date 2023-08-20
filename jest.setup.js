import fetch, {Headers} from 'node-fetch';
import {NativeModules as RNNativeModules} from 'react-native';
import fs from 'fs';
//import { URL, URLSearchParams } from "whatwg-url"

// jest react-native preset does not include fetch implementation in the node environment which RN is providing
global.fetch = fetch;
global.Headers = Headers;

// In RN 0.59 environment these are not available, emulate for Jest/Node
global.URL = undefined;
global.URLSearchParams = undefined;
