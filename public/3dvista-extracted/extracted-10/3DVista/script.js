(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init()",
 "propagateClick": false,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "paddingRight": 0,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C36514E_2AC5_EA87_41A8_1A2E7F965039",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.19,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -93.37,
   "yaw": 135.17,
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -93.37,
   "yaw": -98,
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -93.37,
   "yaw": -98,
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -93.37,
   "yaw": -104.32,
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 69.66,
   "yaw": -104.32,
   "panorama": "this.panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 30.89,
   "yaw": 135.17,
   "panorama": "this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094",
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "6_R tengah atas",
 "id": "panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294",
 "overlays": [
  "this.overlay_3B2668CF_2A3A_DB86_41A6_79CB22305CED",
  "this.overlay_3BF9C4B4_2A3A_EB9B_41B7_C8455DE36034",
  "this.overlay_38069B7B_2AC5_5E8D_41BF_132AE3DA2206"
 ],
 "thumbnailUrl": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "camera": "this.panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -37.81,
   "yaw": -39.11,
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A",
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "1_Pano Depan",
 "id": "panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01",
 "overlays": [
  "this.overlay_3A356FCD_2A4E_B585_41A9_BF8AB1384E0C",
  "this.overlay_3A2EEBA2_2A4A_BDBF_41AD_FE55B33C21B9"
 ],
 "thumbnailUrl": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -104.32,
   "yaw": 69.66,
   "panorama": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294",
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "9_Atap",
 "id": "panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63",
 "overlays": [
  "this.overlay_38F869A0_2ACF_5DBB_418E_0CA34CED430E"
 ],
 "thumbnailUrl": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CFA1247_2AC5_EE85_41B8_0B0B418D26BA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.98,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C727064_2AC5_EABB_41AB_445D8A7ECB91",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.15,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 135.17,
   "yaw": -93.37,
   "panorama": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "5_Dapur",
 "id": "panorama_25040FA5_2A3A_B585_4154_07FF86ACA048",
 "overlays": [
  "this.overlay_3AA3351C_2A3B_AA8B_41A2_0B63DB5D2AC8"
 ],
 "thumbnailUrl": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FF93E48_2AC5_F68B_419F_CB589ED3982C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.63,
  "pitch": 0
 }
},
{
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CCA1288_2AC5_EF8B_41B4_A8F01690D20F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.83,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F17DD6D_2AC5_FA8A_41B5_04474C923952",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.25,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C07E192_2AC5_ED9F_41C3_AAFF7E319E17",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.1,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C1861CC_2AC5_ED8B_41C0_5BA1BEA668FA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.1,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FAE4F08_2AC5_F68B_41C2_6F6BC2D5EB77",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -110.34,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FDDDECC_2AC5_F78B_41BE_AEAFB19B6E50",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.63,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C5430D9_2AC5_EB8D_41A0_634CE109EE68",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.68,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CDC42C5_2AC5_EF85_41B5_D0374059EA51",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.98,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F9F9FB7_2AC5_F585_41B7_5E0EDDC1A41F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.03,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 70.97,
   "yaw": -97.02,
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 70.97,
   "yaw": 126.94,
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 70.97,
   "yaw": 126.94,
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -79.76,
   "yaw": -97.02,
   "panorama": "this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094",
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "rowCount": 13,
      "colCount": 13,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 6656
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "colCount": 7,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "rowCount": 13,
      "colCount": 13,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 6656
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "colCount": 7,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "rowCount": 13,
      "colCount": 13,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 6656
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "colCount": 7,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "rowCount": 13,
      "colCount": 13,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 6656
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "colCount": 7,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "rowCount": 13,
      "colCount": 13,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 6656
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "colCount": 7,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "rowCount": 13,
      "colCount": 13,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 6656
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "colCount": 7,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "8_R Belakang",
 "id": "panorama_24F23E8B_2A3B_D78E_41C3_21791598E408",
 "overlays": [
  "this.overlay_38708F11_2ACB_B69D_41AE_CAECEB300813",
  "this.overlay_39816B38_2ACD_5E8B_41B0_3F6236941238"
 ],
 "thumbnailUrl": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C264112_2AC5_EA9F_41AA_7193058F6BE1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.83,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FE30E0B_2AC5_F68D_4173_128430DE468A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.63,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C61802A_2AC5_EA8F_418B_78240273441A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.24,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FBDFF44_2AC5_F6FB_41B9_A207E4901F31",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.11,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 162.85,
   "yaw": -41.22,
   "panorama": "this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 162.85,
   "yaw": -41.22,
   "panorama": "this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31",
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "4_Kamar",
 "id": "panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D",
 "overlays": [
  "this.overlay_3BD527CB_2A3D_558D_41C2_611645D49DCB"
 ],
 "thumbnailUrl": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F8F3F7E_2AC5_F687_41C0_EBC3615AA3C5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.03,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -41.22,
   "yaw": 162.85,
   "panorama": "this.panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 143.75,
   "yaw": 125.9,
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 143.75,
   "yaw": -77.99,
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A",
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "colCount": 10,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "3_R tengah bawah",
 "id": "panorama_25083206_2A3D_EE87_41C3_810AB4F20A31",
 "overlays": [
  "this.overlay_3A8D63A5_2A47_6D85_41A3_F155B0591C52",
  "this.overlay_25A6D703_2A3D_567E_41C4_6C4EE091E12A",
  "this.overlay_386506B8_2A3D_778B_41B0_D43F561878EA"
 ],
 "thumbnailUrl": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F91DFF0_2AC5_F59B_41C1_5A33447985AE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.03,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3F027CDD_2AC5_FB85_41BF_EED15274E262",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.78,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 135.17,
   "yaw": 30.89,
   "panorama": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -97.02,
   "yaw": -79.76,
   "panorama": "this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "rowCount": 11,
      "colCount": 11,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5632
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "rowCount": 11,
      "colCount": 11,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5632
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "rowCount": 11,
      "colCount": 11,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5632
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "rowCount": 11,
      "colCount": 11,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5632
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "rowCount": 11,
      "colCount": 11,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5632
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "rowCount": 11,
      "colCount": 11,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 5632
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "7_Balkon Dalam",
 "id": "panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094",
 "overlays": [
  "this.overlay_3BB7AB61_2AC6_BEBD_41BC_DD06F48635CE",
  "this.overlay_3E40EFDF_2AC5_D585_4198_0DDDC3B6D1CE"
 ],
 "thumbnailUrl": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FCBEE90_2AC5_F79B_41AF_1C483A24D55E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.63,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 125.9,
   "yaw": 143.75,
   "panorama": "this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 125.9,
   "yaw": 70.97,
   "panorama": "this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -39.11,
   "yaw": -37.81,
   "panorama": "this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -97.02,
   "yaw": 70.97,
   "panorama": "this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408",
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/u/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/u/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/r/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/r/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/b/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/b/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/d/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/d/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 4608
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/l/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0/l/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "2_Halaman",
 "id": "panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A",
 "overlays": [
  "this.overlay_3A1421F8_2A5A_AD8A_41B0_607581A28E64",
  "this.overlay_3A0F6DDC_2A45_558B_41C0_51A097EEA6C3",
  "this.overlay_38A92D06_2ACE_DA87_41B3_3670B783375D"
 ],
 "thumbnailUrl": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3C44709F_2AC5_EB85_41BF_A5D7CD533896",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.15,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3FEE7DC5_2AC5_F585_41BC_B4DD248669A6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.25,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_3CE8D209_2AC5_EE8C_41B1_3C153E13E654",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.89,
  "pitch": 0
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#000000",
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094, this.camera_3FBDFF44_2AC5_F6FB_41B9_A207E4901F31); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.17,
   "hfov": 11.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_1_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -22.06
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E57F9E9_2AC6_FD8D_419B_F90A8F5EC294",
   "yaw": 135.17,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.06,
   "distance": 100,
   "hfov": 11.39
  }
 ],
 "id": "overlay_3B2668CF_2A3A_DB86_41A6_79CB22305CED",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98,
   "hfov": 9.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_1_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -20.32
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5479E9_2AC6_FD8C_41A5_4507AB1C7E8E",
   "yaw": -98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.32,
   "distance": 100,
   "hfov": 9.47
  }
 ],
 "id": "overlay_3BF9C4B4_2A3A_EB9B_41B7_C8455DE36034",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.32,
   "hfov": 6.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -3.52
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3C065819_2ACA_BA8D_41C4_9CD75DBF4A3F",
   "yaw": -104.32,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.52,
   "distance": 100,
   "hfov": 6.13
  }
 ],
 "id": "overlay_38069B7B_2AC5_5E8D_41BF_132AE3DA2206",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A, this.camera_3C36514E_2AC5_EA87_41A8_1A2E7F965039); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.11,
   "hfov": 12.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -3.69
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3C0227F0_2ACA_B59B_41A4_BD8E3203BEF4",
   "yaw": -39.11,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.69,
   "distance": 100,
   "hfov": 12.25
  }
 ],
 "id": "overlay_3A356FCD_2A4E_B585_41A9_BF8AB1384E0C",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.9,
   "hfov": 4.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 8.99
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -23.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_1_HS_1_0.png",
      "width": 190,
      "height": 213
     }
    ]
   },
   "pitch": 8.99,
   "hfov": 4.67
  }
 ],
 "id": "overlay_3A2EEBA2_2A4A_BDBF_41AD_FE55B33C21B9",
 "data": {
  "label": "Image"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294, this.camera_3C5430D9_2AC5_EB8D_41A0_634CE109EE68); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.66,
   "hfov": 14.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.86
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5309F1_2AC6_FD9D_41B8_859598C098FC",
   "yaw": 69.66,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.86,
   "distance": 100,
   "hfov": 14.25
  }
 ],
 "id": "overlay_38F869A0_2ACF_5DBB_418E_0CA34CED430E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.37,
   "hfov": 17.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -32.6
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3C074810_2ACA_BA9B_41B9_08141B99EFF7",
   "yaw": -93.37,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.6,
   "distance": 100,
   "hfov": 17.48
  }
 ],
 "id": "overlay_3AA3351C_2A3B_AA8B_41A2_0B63DB5D2AC8",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094, this.camera_3C61802A_2AC5_EA8F_418B_78240273441A); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.02,
   "hfov": 15.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -25.16
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_38BED1F7_2ACB_AD85_41BA_E675BA4E4F9F",
   "yaw": -97.02,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.16,
   "distance": 100,
   "hfov": 15.71
  }
 ],
 "id": "overlay_38708F11_2ACB_B69D_41AE_CAECEB300813",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A, this.camera_3F91DFF0_2AC5_F59B_41C1_5A33447985AE); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.94,
   "hfov": 15.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_1_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -31.61
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5289EF_2AC6_FD85_41AC_611F04F3DDBC",
   "yaw": 126.94,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.61,
   "distance": 100,
   "hfov": 15.04
  }
 ],
 "id": "overlay_39816B38_2ACD_5E8B_41B0_3F6236941238",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31, this.camera_3C44709F_2AC5_EB85_41BF_A5D7CD533896); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.22,
   "hfov": 9.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.11
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5709E7_2AC6_FD85_4195_B47D56C78832",
   "yaw": -41.22,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.11,
   "distance": 100,
   "hfov": 9.76
  }
 ],
 "id": "overlay_3BD527CB_2A3D_558D_41C2_611645D49DCB",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A, this.camera_3F17DD6D_2AC5_FA8A_41B5_04474C923952); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.9,
   "hfov": 13.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_1_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.38
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5629E5_2AC6_FD85_41B4_160F6DDFD285",
   "yaw": 125.9,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.38,
   "distance": 100,
   "hfov": 13.02
  }
 ],
 "id": "overlay_3A8D63A5_2A47_6D85_41A3_F155B0591C52",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D, this.camera_3F027CDD_2AC5_FB85_41BF_EED15274E262); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.85,
   "hfov": 6.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.25
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5679E6_2AC6_FD87_41AF_D2E53B052D75",
   "yaw": 162.85,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 8.25,
   "distance": 100,
   "hfov": 6.19
  }
 ],
 "id": "overlay_25A6D703_2A3D_567E_41C4_6C4EE091E12A",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A, this.camera_3FEE7DC5_2AC5_F585_41BC_B4DD248669A6); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.99,
   "hfov": 6.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.34
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5689E7_2AC6_FD85_41B5_C76E68225D4B",
   "yaw": -77.99,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 7.34,
   "distance": 100,
   "hfov": 6.21
  }
 ],
 "id": "overlay_386506B8_2A3D_778B_41B0_D43F561878EA",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.76,
   "hfov": 12.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -42.74
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3F3BCBEC_2AC5_FD8B_41A6_BC408A16880D",
   "yaw": -79.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -42.74,
   "distance": 100,
   "hfov": 12.72
  }
 ],
 "id": "overlay_3BB7AB61_2AC6_BEBD_41BC_DD06F48635CE",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.89,
   "hfov": 11.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_1_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -3.83
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E55B9EC_2AC6_FD8B_41BE_BA2B909358C7",
   "yaw": 30.89,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.83,
   "distance": 100,
   "hfov": 11.88
  }
 ],
 "id": "overlay_3E40EFDF_2AC5_D585_4198_0DDDC3B6D1CE",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01, this.camera_3CE8D209_2AC5_EE8C_41B1_3C153E13E654); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.81,
   "hfov": 17.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_1_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -46.87
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_39A939E3_2AC6_FDBD_419E_134A5EBAE231",
   "yaw": -37.81,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -46.87,
   "distance": 100,
   "hfov": 17.69
  }
 ],
 "id": "overlay_3A1421F8_2A5A_AD8A_41B0_607581A28E64",
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_25083206_2A3D_EE87_41C3_810AB4F20A31, this.camera_3C07E192_2AC5_ED9F_41C3_AAFF7E319E17); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.75,
   "hfov": 5.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.32
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_39A949E4_2AC6_FDBB_41B5_40D180E90DAD",
   "yaw": 143.75,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.32,
   "distance": 100,
   "hfov": 5.27
  }
 ],
 "id": "overlay_3A0F6DDC_2A45_558B_41C0_51A097EEA6C3",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408, this.camera_3CFA1247_2AC5_EE85_41B8_0B0B418D26BA); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.97,
   "hfov": 4.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.31
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_39A2DB95_2ACE_DD85_41C4_1ACEB9517D82",
   "yaw": 70.97,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.31,
   "distance": 100,
   "hfov": 4.53
  }
 ],
 "id": "overlay_38A92D06_2ACE_DA87_41B3_3670B783375D",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E57F9E9_2AC6_FD8D_419B_F90A8F5EC294",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_1_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E5479E9_2AC6_FD8C_41A5_4507AB1C7E8E",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_1_HS_1_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3C065819_2ACA_BA8D_41C4_9CD75DBF4A3F",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_2_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3C0227F0_2ACA_B59B_41A4_BD8E3203BEF4",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_25FA4E09_2A4A_B68D_41C0_7EE0C6CA7B01_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E5309F1_2AC6_FD9D_41B8_859598C098FC",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3C074810_2ACA_BA9B_41B9_08141B99EFF7",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_38BED1F7_2ACB_AD85_41BA_E675BA4E4F9F",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E5289EF_2AC6_FD85_41AC_611F04F3DDBC",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_1_HS_1_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E5709E7_2AC6_FD85_4195_B47D56C78832",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E5629E5_2AC6_FD85_41B4_160F6DDFD285",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_1_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E5679E6_2AC6_FD87_41AF_D2E53B052D75",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E5689E7_2AC6_FD85_41B5_C76E68225D4B",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_25083206_2A3D_EE87_41C3_810AB4F20A31_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3F3BCBEC_2AC5_FD8B_41A6_BC408A16880D",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_3E55B9EC_2AC6_FD8B_41BE_BA2B909358C7",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_1_HS_1_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_39A939E3_2AC6_FDBD_419E_134A5EBAE231",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_1_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_39A949E4_2AC6_FDBB_41B5_40D180E90DAD",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_39A2DB95_2ACE_DD85_41C4_1ACEB9517D82",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_252375B3_2A3D_B59C_41C0_4CD31EC1FA3A_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
}],
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scripts": {
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "class": "Player",
 "paddingTop": 0,
 "data": {
  "name": "Player14024"
 },
 "shadow": false,
 "contentOpaque": false,
 "downloadEnabled": false,
 "vrPolyfillScale": 0.5,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
