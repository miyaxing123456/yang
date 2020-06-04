const path=require("path");

module.exports={
	devServer:{
		proxy: {
      "/api":{
        target:"http://47.106.12.223:8569",
        changeOrigin:true,
        pathRewrite:{
          "^/api":"http://47.106.12.223:8569"
        }
      }
	}
	},
	chainWebpack:(config)=>{
		config.resolve.alias.set("",path.join(__dirname,""))
	}
}