var tianditu_vec=new ol.layer.Tile({
    title:"天地图矢量图层",
    source:new ol.source.XYZ({
        url:"https://t1.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=628aa1683aed8fd798a26fd3afecd0e8",
        crossOrigin:"anonymous",
        wrapX:true
    })
});

var tianditu_cva= new ol.layer.Tile({
    title:"天地图矢量注记图层",
    source:new ol.source.XYZ({
        url:"https://t1.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=628aa1683aed8fd798a26fd3afecd0e8",
        attributions:"天地图的属性描述",
        crossOrigin:"anonymous",
        wrapX:true
    })
});

var tianditu_img= new ol.layer.Tile({
    title:"天地图卫星图层",
    source:new ol.source.XYZ({
        url:"http://t3.tianditu.com/DataServer?T=img_w&tk=628aa1683aed8fd798a26fd3afecd0e8&x={x}&y={y}&l={z}",
        crossOrigin:"anonymous",
        wrapX:true
    })
});
