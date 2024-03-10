import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.baseUrl = "prod.url";
  config.H5BaseURL = "https://h5.imooc-lego.com";
  return config;
};
