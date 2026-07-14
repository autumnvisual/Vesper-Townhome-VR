(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_792C78C9_6107_DA6E_41CC_9B9AE30DE0C7",
 "width": 2560,
 "label": "FL 2_Scence 4",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_792C78C9_6107_DA6E_41CC_9B9AE30DE0C7.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_792C78C9_6107_DA6E_41CC_9B9AE30DE0C7_t.png",
 "height": 1706
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.73,
  "pitch": 0
 },
 "id": "camera_74E89A80_61ED_08EC_41C2_3170AAB3F256",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_6E23DF91_6104_D6FE_41CE_C407BA210220",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E2727B3_6107_7622_419B_889D20685C1B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_6E2727B3_6107_7622_419B_889D20685C1B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_6E0C4786_6107_36E3_41B7_5293974CAD74",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "media": "this.panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 70.72,
  "pitch": 0
 },
 "id": "camera_74C59A8E_61ED_08F4_41D2_78992FDC40B1",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.11,
  "pitch": 0
 },
 "id": "camera_707C6B0C_61ED_09F4_41CA_074D891E4201",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 25.7,
   "backwardYaw": -106.43,
   "distance": 1,
   "panorama": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 5.3,
   "backwardYaw": -106.43,
   "distance": 1,
   "panorama": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -15.98,
   "backwardYaw": -106.43,
   "distance": 1,
   "panorama": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -34.52,
   "backwardYaw": -106.43,
   "distance": 1,
   "panorama": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365",
 "label": "Pano_Rear",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_t.jpg",
 "overlays": [
  "this.overlay_6EC6C4EB_61D7_383C_41B5_AC892AA9AE9A",
  "this.overlay_6EC6A4EB_61D7_383C_41D1_644A2764F084",
  "this.overlay_6EC6B4EB_61D7_383C_41C6_784B74ECC981",
  "this.overlay_6EC694EC_61D7_3834_41D2_FA3399BA3259"
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_793A0F98_6107_56EE_41B9_93941F87507A",
 "width": 2560,
 "label": "FL 1_Office",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_793A0F98_6107_56EE_41B9_93941F87507A.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_793A0F98_6107_56EE_41B9_93941F87507A_t.png",
 "height": 1920
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAFPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F"
 ],
 "buttonNext": [
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 109.91,
  "pitch": 0
 },
 "id": "camera_74B0EA9D_61ED_0817_41D3_C29154E82B0B",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_714F1500_61D5_39ED_41CE_8A87E7557867",
 "width": 2560,
 "label": "Scene 9",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_714F1500_61D5_39ED_41CE_8A87E7557867.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_714F1500_61D5_39ED_41CE_8A87E7557867_t.png",
 "height": 1705
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79DF0340_6107_CE5E_41AD_01B9139DAF31",
 "width": 2560,
 "label": "FL 2_Scence 3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79DF0340_6107_CE5E_41AD_01B9139DAF31.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79DF0340_6107_CE5E_41AD_01B9139DAF31_t.png",
 "height": 1706
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 160.41,
  "pitch": 0
 },
 "id": "camera_704CAB1C_61ED_0814_4185_4ED2F06F57D1",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_7923F74A_6107_3663_41CD_817B44A3473F",
 "width": 2560,
 "label": "FL 1_Garage",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7923F74A_6107_3663_41CD_817B44A3473F.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_7923F74A_6107_3663_41CD_817B44A3473F_t.png",
 "height": 1440
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79D98CAA_6107_FA22_41D5_7DC81A97DE88",
 "width": 2560,
 "label": "FL 2_Scence 2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79D98CAA_6107_FA22_41D5_7DC81A97DE88.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79D98CAA_6107_FA22_41D5_7DC81A97DE88_t.png",
 "height": 1704
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 156.01,
   "backwardYaw": 42.21,
   "distance": 1,
   "panorama": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7",
 "label": "Pano2_mBath",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_t.jpg",
 "overlays": [
  "this.overlay_435352D9_610F_4E6E_41D7_98EA36E75419"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.91,
  "pitch": 0
 },
 "id": "camera_70468B1C_61ED_0814_41A1_8B9202DA2518",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_71972A9F_61D5_0814_41C0_E681A89B30BC",
 "width": 2560,
 "label": "FRONT",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_71972A9F_61D5_0814_41C0_E681A89B30BC.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_71972A9F_61D5_0814_41C0_E681A89B30BC_t.png",
 "height": 1440
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79264E21_6107_79DE_41CA_D7FE2297ECDB",
 "width": 2560,
 "label": "FL 1_Scence 3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79264E21_6107_79DE_41CA_D7FE2297ECDB.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79264E21_6107_79DE_41CA_D7FE2297ECDB_t.png",
 "height": 1704
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "media": "this.panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "media": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "media": "this.panorama_6E23DF91_6104_D6FE_41CE_C407BA210220",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "media": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "media": "this.panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "media": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 7)",
   "media": "this.panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E2727B3_6107_7622_419B_889D20685C1B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 7, 8)",
   "media": "this.panorama_6E2727B3_6107_7622_419B_889D20685C1B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 8, 9)",
   "media": "this.panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 9, 10)",
   "media": "this.panorama_6E0C4786_6107_36E3_41B7_5293974CAD74",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 10, 11)",
   "media": "this.panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 11, 0)",
   "media": "this.panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist"
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -11.27,
   "backwardYaw": 173,
   "distance": 1,
   "panorama": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.86,
   "backwardYaw": 173,
   "distance": 1,
   "panorama": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 29.13,
   "backwardYaw": 173,
   "distance": 1,
   "panorama": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -33.16,
   "backwardYaw": 173,
   "distance": 1,
   "panorama": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC",
 "label": "Pano_Front",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_t.jpg",
 "overlays": [
  "this.overlay_6CF0B446_61D7_1874_41C5_797A090EB8C2",
  "this.overlay_6CF0D446_61D7_1874_41D7_43275359AF5F",
  "this.overlay_6CF0C446_61D7_1874_416A_D6B726C8DA1A",
  "this.overlay_6CF0F446_61D7_1874_41D3_F5553DDCDDA6"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.57,
  "pitch": 0
 },
 "id": "camera_705E6B2B_61ED_0833_41D7_731008940AED",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_793611E8_6104_CA2F_41C6_E0268CAD7904",
 "width": 2560,
 "label": "FL 1_Entry",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_793611E8_6104_CA2F_41C6_E0268CAD7904.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_793611E8_6104_CA2F_41C6_E0268CAD7904_t.png",
 "height": 1440
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_71BAA223_61D5_182C_41AD_E3A822CB721A",
 "width": 2560,
 "label": "Isometric",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_71BAA223_61D5_182C_41AD_E3A822CB721A.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_71BAA223_61D5_182C_41AD_E3A822CB721A_t.png",
 "height": 1705
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79C6952B_6107_CA22_41D1_3528FB69D1B7",
 "width": 2560,
 "label": "FL 2_W.I.C",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79C6952B_6107_CA22_41D1_3528FB69D1B7.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79C6952B_6107_CA22_41D1_3528FB69D1B7_t.png",
 "height": 2560
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_78332C3F_6104_DA21_4185_2CF9C2463BBE",
 "width": 2560,
 "label": "FL 1_Dinning",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_78332C3F_6104_DA21_4185_2CF9C2463BBE.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_78332C3F_6104_DA21_4185_2CF9C2463BBE_t.png",
 "height": 1440
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79C45E94_6107_D6E6_41C0_9FDE5C57CDD2",
 "width": 2560,
 "label": "FL 2_Scence 6",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79C45E94_6107_D6E6_41C0_9FDE5C57CDD2.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79C45E94_6107_D6E6_41C0_9FDE5C57CDD2_t.png",
 "height": 1706
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 122.85,
   "backwardYaw": 11.56,
   "distance": 1,
   "panorama": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83",
 "label": "Pano2_bed3",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_t.jpg",
 "overlays": [
  "this.overlay_7E88F6E9_610B_D621_41D7_88C267B6A5BA"
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79DC059B_6107_4AE1_41D7_60AC297A014C",
 "width": 2560,
 "label": "FL 1_Scence",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79DC059B_6107_4AE1_41D7_60AC297A014C.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79DC059B_6107_4AE1_41D7_60AC297A014C_t.png",
 "height": 1704
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79F24595_6107_4AE1_41D4_2E48C1FB0870",
 "width": 2560,
 "label": "FL 1_Scence 2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79F24595_6107_4AE1_41D4_2E48C1FB0870.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79F24595_6107_4AE1_41D4_2E48C1FB0870_t.png",
 "height": 1704
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_797CB3DF_6107_CE62_41D0_786903001B99",
 "width": 2560,
 "label": "FL 2_FL 2_Laundry",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_797CB3DF_6107_CE62_41D0_786903001B99.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_797CB3DF_6107_CE62_41D0_786903001B99_t.png",
 "height": 1706
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79C64975_6107_3A26_41C8_5BB0CCADF787",
 "width": 2560,
 "label": "FL 2_Entry 2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79C64975_6107_3A26_41C8_5BB0CCADF787.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79C64975_6107_3A26_41C8_5BB0CCADF787_t.png",
 "height": 1706
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79C19D47_6107_5A61_41D4_F4D61DFA0ABF",
 "width": 2560,
 "label": "FL 2_Bedroom 2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79C19D47_6107_5A61_41D4_F4D61DFA0ABF.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79C19D47_6107_5A61_41D4_F4D61DFA0ABF_t.png",
 "height": 1704
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7,
  "pitch": 0
 },
 "id": "camera_745B9ACD_61ED_0874_41D8_28409E642F6C",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album Interior",
 "id": "album_7BCDC35C_611B_4E67_41D3_C87957382BF9",
 "playList": "this.album_7BCDC35C_611B_4E67_41D3_C87957382BF9_AlbumPlayList",
 "thumbnailUrl": "media/album_7BCDC35C_611B_4E67_41D3_C87957382BF9_t.png"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.57,
  "pitch": 0
 },
 "id": "camera_7053CB2B_61ED_0833_41C6_826D3955C857",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_792B27C7_6107_5662_41B6_21C7D00EBEFC",
 "width": 2560,
 "label": "FL 1_Living",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_792B27C7_6107_5662_41B6_21C7D00EBEFC.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_792B27C7_6107_5662_41B6_21C7D00EBEFC_t.png",
 "height": 1440
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -168.82,
   "backwardYaw": 172.34,
   "distance": 1,
   "panorama": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E",
 "label": "Pano2_Mbed",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_t.jpg",
 "overlays": [
  "this.overlay_7EFB16AD_610D_5626_41B4_BE9230302560",
  "this.overlay_7EA15771_610D_3621_41C1_7B1DFED8EDB8"
 ]
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album Exterior",
 "id": "album_7784BEC8_6105_566E_41C0_2F98E9174599",
 "playList": "this.album_7784BEC8_6105_566E_41C0_2F98E9174599_AlbumPlayList",
 "thumbnailUrl": "media/album_7784BEC8_6105_566E_41C0_2F98E9174599_t.png"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_7922CA77_6107_DE21_41B8_0EFB1599B07F",
 "width": 2560,
 "label": "FL 2_M Bathroom",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7922CA77_6107_DE21_41B8_0EFB1599B07F.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_7922CA77_6107_DE21_41B8_0EFB1599B07F_t.png",
 "height": 1704
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BEPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F"
 ],
 "buttonNext": [
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7,
  "pitch": 0
 },
 "id": "camera_744B4ABD_61ED_0814_41C7_D870746DFA2D",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 77.63,
   "backwardYaw": -41.95,
   "distance": 1,
   "panorama": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E0C4786_6107_36E3_41B7_5293974CAD74",
 "label": "Pano2_Laundry",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_t.jpg",
 "overlays": [
  "this.overlay_7E463AAA_610D_3E22_41D5_039C6034BE47"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.57,
  "pitch": 0
 },
 "id": "camera_7059AB2B_61ED_0833_4182_D59CCAE6AEA6",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -102.37,
  "pitch": 0
 },
 "id": "camera_74810A9D_61ED_0817_41D0_8BF5CECE2E22",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.18,
  "pitch": 0
 },
 "id": "camera_748EFAAD_61ED_0834_41C1_CFFE866AF9F6",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79DAE64C_6107_F666_41D4_0E282DB5E8E3",
 "width": 2560,
 "label": "FL 2_Scence 1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79DAE64C_6107_F666_41D4_0E282DB5E8E3.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79DAE64C_6107_F666_41D4_0E282DB5E8E3_t.png",
 "height": 1704
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -161.8,
   "backwardYaw": -109.28,
   "distance": 1,
   "panorama": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11.56,
   "backwardYaw": 122.85,
   "distance": 1,
   "panorama": "this.panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 42.21,
   "backwardYaw": 156.01,
   "distance": 1,
   "panorama": "this.panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -19.59,
   "backwardYaw": -70.09,
   "distance": 1,
   "panorama": "this.panorama_6E2727B3_6107_7622_419B_889D20685C1B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -41.95,
   "backwardYaw": 77.63,
   "distance": 1,
   "panorama": "this.panorama_6E0C4786_6107_36E3_41B7_5293974CAD74"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 172.34,
   "backwardYaw": -168.82,
   "distance": 1,
   "panorama": "this.panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E",
 "label": "Pano2_Entry",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_t.jpg",
 "overlays": [
  "this.overlay_7EC4F85B_6107_7A61_41D1_669255626399",
  "this.overlay_41431E25_6107_5621_41C5_62423D6F9AAA",
  "this.overlay_7F5D0021_6104_CA21_41D4_0DA0D0CD2166",
  "this.overlay_7FE33FD2_6104_D663_41D2_3119D79B136A",
  "this.overlay_7E2347FE_6105_3623_41A6_AE8F0E3CDD32",
  "this.overlay_43D6CBAF_6107_DE21_41D1_664AB5BD1CBF"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.42,
  "pitch": 0
 },
 "id": "camera_7035CB3B_61ED_081C_41D5_DE98A456DC1E",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.57,
  "pitch": 0
 },
 "id": "camera_702B4B3B_61ED_081C_41CF_73EF7799BB46",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.79,
  "pitch": 0
 },
 "id": "camera_7439CADC_61ED_0814_41D2_AAE76C2D10A9",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_755EBA4E_61ED_0874_41A0_639E647C4933, 0)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_7784BEC8_6105_566E_41C0_2F98E9174599",
   "player": "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAFPhotoAlbumPlayer"
  }
 ],
 "id": "playList_755EBA4E_61ED_0874_41A0_639E647C4933"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.3,
  "pitch": 0
 },
 "id": "camera_70408B0C_61ED_09F4_41C7_588A6CC88049",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 41.49,
   "backwardYaw": 0.89,
   "distance": 1,
   "panorama": "this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -106.43,
   "backwardYaw": 25.7,
   "distance": 1,
   "panorama": "this.panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 61.58,
   "backwardYaw": 127.09,
   "distance": 1,
   "panorama": "this.panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D",
 "label": "Pano_Kit, dinning",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_t.jpg",
 "overlays": [
  "this.overlay_7DEF1FD7_613C_F661_41D0_2D243174F826",
  "this.overlay_7C9EAC22_613D_7A23_41BC_615609275412",
  "this.overlay_7FAD7F5B_613D_F661_41CA_845A7DF13E69"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.44,
  "pitch": 0
 },
 "id": "camera_74F7EA80_61ED_08EC_41C8_377CE19B3C48",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 127.09,
   "backwardYaw": 61.58,
   "distance": 1,
   "panorama": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7",
 "label": "Pano_Office",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_t.jpg",
 "overlays": [
  "this.overlay_7C8BE080_6105_CADE_41D3_441776BDB2EE"
 ]
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79D5E00B_6107_C9E1_41BF_0B66EE4D157E",
 "width": 2560,
 "label": "FL 2_M Bedrom",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79D5E00B_6107_C9E1_41BF_0B66EE4D157E.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79D5E00B_6107_C9E1_41BF_0B66EE4D157E_t.png",
 "height": 1704
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_79C18398_6107_4EEF_41BF_3BD1E2DB6A88",
 "width": 2560,
 "label": "FL 2_Bedroom 3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_79C18398_6107_4EEF_41BF_3BD1E2DB6A88.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_79C18398_6107_4EEF_41BF_3BD1E2DB6A88_t.png",
 "height": 1706
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.2,
  "pitch": 0
 },
 "id": "camera_7514BA6E_61ED_0834_41C6_A25332CBC098",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_71A26597_61D5_1814_41BE_2DB7055DA037",
 "width": 2560,
 "label": "Scene 9",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_71A26597_61D5_1814_41BE_2DB7055DA037.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_71A26597_61D5_1814_41BE_2DB7055DA037_t.png",
 "height": 1705
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7,
  "pitch": 0
 },
 "id": "camera_746D0AAD_61ED_0804_41A3_E05E5B224E61",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.66,
  "pitch": 0
 },
 "id": "camera_74283ACD_61ED_0874_41D8_3041452E165B",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_7903F01A_6107_49E3_41C6_EAF1FB8C20DD",
 "width": 2560,
 "label": "FL 1_Kitchen",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7903F01A_6107_49E3_41C6_EAF1FB8C20DD.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_7903F01A_6107_49E3_41C6_EAF1FB8C20DD_t.png",
 "height": 1704
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_752B2A4E_61ED_0874_41AD_8D8C70A8473C, 0)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_7BCDC35C_611B_4E67_41D3_C87957382BF9",
   "player": "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BEPhotoAlbumPlayer"
  }
 ],
 "id": "playList_752B2A4E_61ED_0874_41AD_8D8C70A8473C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.51,
  "pitch": 0
 },
 "id": "camera_751E2A6E_61ED_0834_41C1_15642F0B1834",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -70.09,
   "backwardYaw": -19.59,
   "distance": 1,
   "panorama": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E2727B3_6107_7622_419B_889D20685C1B",
 "label": "Pano2_bed2",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_t.jpg",
 "overlays": [
  "this.overlay_416105D8_610B_4A6F_41B0_E7E9B33E3F11"
 ]
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -109.28,
   "backwardYaw": -161.8,
   "distance": 1,
   "panorama": "this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.89,
   "backwardYaw": 41.49,
   "distance": 1,
   "panorama": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 173,
   "backwardYaw": -11.27,
   "distance": 1,
   "panorama": "this.panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6E23DF91_6104_D6FE_41CE_C407BA210220"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E",
 "label": "Pano_Entry 1",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_t.jpg",
 "overlays": [
  "this.overlay_7ADE3C2E_6107_3A22_41D7_883D420F7F58",
  "this.overlay_7C540085_6105_4AE1_41D3_0E5CCC705486",
  "this.overlay_7ABDF2A5_6104_CE26_41C9_E430D092B845",
  "this.overlay_43E3BE74_611B_3627_41D2_EBA49BEB9A6D"
 ]
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_70E54FF6_61D5_0814_41CA_EBC59C3DF874",
 "width": 2560,
 "label": "Isometric",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_70E54FF6_61D5_0814_41CA_EBC59C3DF874.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_70E54FF6_61D5_0814_41CA_EBC59C3DF874_t.png",
 "height": 1705
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_716FD836_61D5_0814_41D3_5B3A4F10407B",
 "width": 2560,
 "label": "FRONT",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_716FD836_61D5_0814_41D3_5B3A4F10407B.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/photo_716FD836_61D5_0814_41D3_5B3A4F10407B_t.png",
 "height": 1440
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -57.15,
  "pitch": 0
 },
 "id": "camera_74D24A8E_61ED_08F4_41D7_C67230758789",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6E2727B3_6107_7622_419B_889D20685C1B_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_6E23DF91_6104_D6FE_41CE_C407BA210220",
 "label": "Pano_Garage",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_t.jpg",
 "overlays": [
  "this.overlay_7D232959_613D_5A6E_41BC_C608B2873AEC",
  "this.overlay_7CCC8896_613D_DAE3_419B_B8214A0A449F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7,
  "pitch": 0
 },
 "id": "camera_747DAABD_61ED_0814_41B8_C821F58D8A48",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.05,
  "pitch": 0
 },
 "id": "camera_749F7AAD_61ED_0834_41D2_4A97E1243B7E",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.99,
  "pitch": 0
 },
 "id": "camera_74A01A8E_61ED_08F4_41D6_40D000284363",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_camera",
 "manualRotationSpeed": 507,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- MENU"
 },
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "12.832%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 115.05,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": 641,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F"
 ],
 "left": 30,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "scrollBarVisible": "rollOver",
 "width": 573,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "top": 25,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": 116,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photoalbum"
 },
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--CONTACT"
 },
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D, this.camera_7053CB2B_61ED_0833_41C6_826D3955C857); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.2,
   "image": "this.AnimatedImageResource_71488EEA_61D7_083C_41C9_A1C4A5988D10",
   "pitch": -2.79,
   "yaw": 25.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6EC6C4EB_61D7_383C_41B5_AC892AA9AE9A",
 "maps": [
  {
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D, this.camera_7059AB2B_61ED_0833_4182_D59CCAE6AEA6); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.2,
   "image": "this.AnimatedImageResource_71487EEA_61D7_083C_41C7_25FEBABE033D",
   "pitch": -2.98,
   "yaw": 5.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6EC6A4EB_61D7_383C_41D1_644A2764F084",
 "maps": [
  {
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D, this.camera_705E6B2B_61ED_0833_41D7_731008940AED); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.2,
   "image": "this.AnimatedImageResource_71482EEA_61D7_083C_41BA_9F95E1D886B3",
   "pitch": -3.38,
   "yaw": -15.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6EC6B4EB_61D7_383C_41C6_784B74ECC981",
 "maps": [
  {
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D, this.camera_702B4B3B_61ED_081C_41CF_73EF7799BB46); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.2,
   "image": "this.AnimatedImageResource_71498EEA_61D7_083C_41D6_8991956874FF",
   "pitch": -2.98,
   "yaw": -34.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6EC694EC_61D7_3834_41D2_FA3399BA3259",
 "maps": [
  {
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.98
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "right": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "cursor": "hand",
 "maxHeight": 130,
 "maxWidth": 130,
 "paddingLeft": 0,
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 70,
 "horizontalAlign": "center",
 "width": "8%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton left arrow"
 }
},
{
 "cursor": "hand",
 "maxHeight": 150,
 "maxWidth": 150,
 "paddingLeft": 0,
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 70,
 "horizontalAlign": "center",
 "width": "10%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "10%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton left arrow"
 }
},
{
 "cursor": "hand",
 "maxHeight": 130,
 "maxWidth": 130,
 "paddingLeft": 0,
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 70,
 "horizontalAlign": "center",
 "width": "8%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton right arrow"
 }
},
{
 "cursor": "hand",
 "maxHeight": 150,
 "maxWidth": 150,
 "paddingLeft": 0,
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 70,
 "horizontalAlign": "center",
 "width": "10%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "10%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton right arrow"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E, this.camera_7439CADC_61ED_0814_41D2_AAE76C2D10A9); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_465A9ECE_6105_3663_41D6_2CB34B951066",
   "pitch": -1.26,
   "yaw": 156.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_435352D9_610F_4E6E_41D7_98EA36E75419",
 "maps": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E, this.camera_746D0AAD_61ED_0804_41A3_E05E5B224E61); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.82,
   "image": "this.AnimatedImageResource_71510EE8_61D7_083C_41CF_8412391D4E1C",
   "pitch": -0.76,
   "yaw": -11.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6CF0B446_61D7_1874_41C5_797A090EB8C2",
 "maps": [
  {
   "hfov": 2.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E, this.camera_747DAABD_61ED_0814_41B8_C821F58D8A48); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.82,
   "image": "this.AnimatedImageResource_714EFEE8_61D7_083C_41B5_229826F6685E",
   "pitch": -0.43,
   "yaw": 9.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6CF0D446_61D7_1874_41D7_43275359AF5F",
 "maps": [
  {
   "hfov": 2.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E, this.camera_744B4ABD_61ED_0814_41C7_D870746DFA2D); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.82,
   "image": "this.AnimatedImageResource_714EAEE8_61D7_083C_41C4_CE11BBD5C863",
   "pitch": -0.07,
   "yaw": 29.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6CF0C446_61D7_1874_416A_D6B726C8DA1A",
 "maps": [
  {
   "hfov": 2.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E, this.camera_745B9ACD_61ED_0874_41D8_28409E642F6C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.82,
   "image": "this.AnimatedImageResource_714E1EE8_61D7_083C_41D6_867CA5D4BB50",
   "pitch": 0.03,
   "yaw": -33.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6CF0F446_61D7_1874_41D3_F5553DDCDDA6",
 "maps": [
  {
   "hfov": 2.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E, this.camera_74F7EA80_61ED_08EC_41C8_377CE19B3C48); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_46593ECE_6105_3663_41D0_3451B8DF87DE",
   "pitch": -5.03,
   "yaw": 122.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7E88F6E9_610B_D621_41D7_88C267B6A5BA",
 "maps": [
  {
   "hfov": 8.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.03
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.74",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_716FD836_61D5_0814_41D3_5B3A4F10407B"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.56",
     "zoomFactor": 1.1,
     "y": "0.65"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_70E54FF6_61D5_0814_41CA_EBC59C3DF874"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.39",
     "zoomFactor": 1.1,
     "y": "0.61"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_714F1500_61D5_39ED_41CE_8A87E7557867"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.42",
     "zoomFactor": 1.1,
     "y": "0.47"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_793611E8_6104_CA2F_41C6_E0268CAD7904"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.30",
     "zoomFactor": 1.1,
     "y": "0.70"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_7923F74A_6107_3663_41CD_817B44A3473F"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.47",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79DC059B_6107_4AE1_41D7_60AC297A014C"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.64",
     "zoomFactor": 1.1,
     "y": "0.75"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_78332C3F_6104_DA21_4185_2CF9C2463BBE"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.57",
     "zoomFactor": 1.1,
     "y": "0.37"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79F24595_6107_4AE1_41D4_2E48C1FB0870"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.51",
     "zoomFactor": 1.1,
     "y": "0.41"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_7903F01A_6107_49E3_41C6_EAF1FB8C20DD"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.51",
     "zoomFactor": 1.1,
     "y": "0.61"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_792B27C7_6107_5662_41B6_21C7D00EBEFC"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.39",
     "zoomFactor": 1.1,
     "y": "0.46"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79264E21_6107_79DE_41CA_D7FE2297ECDB"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.56",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_793A0F98_6107_56EE_41B9_93941F87507A"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.57"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79C64975_6107_3A26_41C8_5BB0CCADF787"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1.1,
     "y": "0.49"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79D5E00B_6107_C9E1_41BF_0B66EE4D157E"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.54",
     "zoomFactor": 1.1,
     "y": "0.67"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79DAE64C_6107_F666_41D4_0E282DB5E8E3"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.38",
     "zoomFactor": 1.1,
     "y": "0.41"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79DF0340_6107_CE5E_41AD_01B9139DAF31"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.52",
     "zoomFactor": 1.1,
     "y": "0.27"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_7922CA77_6107_DE21_41B8_0EFB1599B07F"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "zoomFactor": 1.1,
     "y": "0.44"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79C6952B_6107_CA22_41D1_3528FB69D1B7"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.40",
     "zoomFactor": 1.1,
     "y": "0.62"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_797CB3DF_6107_CE62_41D0_786903001B99"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.25",
     "zoomFactor": 1.1,
     "y": "0.52"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79C19D47_6107_5A61_41D4_F4D61DFA0ABF"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.71",
     "zoomFactor": 1.1,
     "y": "0.29"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79D98CAA_6107_FA22_41D5_7DC81A97DE88"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.58",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79C18398_6107_4EEF_41BF_3BD1E2DB6A88"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.32",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_792C78C9_6107_DA6E_41CC_9B9AE30DE0C7"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.54",
     "zoomFactor": 1.1,
     "y": "0.28"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_79C45E94_6107_D6E6_41C0_9FDE5C57CDD2"
  }
 ],
 "id": "album_7BCDC35C_611B_4E67_41D3_C87957382BF9_AlbumPlayList"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E, this.camera_74283ACD_61ED_0874_41D8_3041452E165B); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.6,
   "image": "this.AnimatedImageResource_465AAECE_6105_3663_41AF_5A469F2EA8D5",
   "pitch": -4.53,
   "yaw": -168.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7EFB16AD_610D_5626_41B4_BE9230302560",
 "maps": [
  {
   "hfov": 8.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.61,
   "image": "this.AnimatedImageResource_465AEECE_6105_3663_41D5_7A48551FCBD1",
   "pitch": -3.27,
   "yaw": -109.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7EA15771_610D_3621_41C1_7B1DFED8EDB8",
 "maps": [
  {
   "hfov": 8.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.45",
     "zoomFactor": 1.1,
     "y": "0.36"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_71972A9F_61D5_0814_41C0_E681A89B30BC"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.46",
     "zoomFactor": 1.1,
     "y": "0.34"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_71BAA223_61D5_182C_41AD_E3A822CB721A"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.36",
     "zoomFactor": 1.1,
     "y": "0.68"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_71A26597_61D5_1814_41BE_2DB7055DA037"
  }
 ],
 "id": "album_7784BEC8_6105_566E_41C0_2F98E9174599_AlbumPlayList"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "right": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E, this.camera_749F7AAD_61ED_0834_41D2_4A97E1243B7E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_46596ECE_6105_3663_419B_AD2783A1F36E",
   "pitch": -4.78,
   "yaw": 77.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7E463AAA_610D_3E22_41D5_039C6034BE47",
 "maps": [
  {
   "hfov": 8.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E0C4786_6107_36E3_41B7_5293974CAD74, this.camera_74810A9D_61ED_0817_41D0_8BF5CECE2E22); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.61,
   "image": "this.AnimatedImageResource_4658EECE_6105_3663_41B9_EC24FF29F893",
   "pitch": -2.77,
   "yaw": -41.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7EC4F85B_6107_7A61_41D1_669255626399",
 "maps": [
  {
   "hfov": 8.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E2727B3_6107_7622_419B_889D20685C1B, this.camera_74B0EA9D_61ED_0817_41D3_C29154E82B0B); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_46581ECE_6105_3663_41CB_92C0B93C53AA",
   "pitch": -2.01,
   "yaw": -19.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41431E25_6107_5621_41C5_62423D6F9AAA",
 "maps": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83, this.camera_74D24A8E_61ED_08F4_41D7_C67230758789); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_4659BECE_6105_3663_41D7_6698987205CA",
   "pitch": -2.01,
   "yaw": 11.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7F5D0021_6104_CA21_41D4_0DA0D0CD2166",
 "maps": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7, this.camera_74A01A8E_61ED_08F4_41D6_40D000284363); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.61,
   "image": "this.AnimatedImageResource_4659DECE_6105_3663_418D_895465AA6D6C",
   "pitch": -2.77,
   "yaw": 42.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7FE33FD2_6104_D663_41D2_3119D79B136A",
 "maps": [
  {
   "hfov": 8.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E, this.camera_748EFAAD_61ED_0834_41C1_CFFE866AF9F6); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.6,
   "image": "this.AnimatedImageResource_46590ECE_6105_3663_41B1_922043C33D37",
   "pitch": -4.28,
   "yaw": 172.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7E2347FE_6105_3623_41A6_AE8F0E3CDD32",
 "maps": [
  {
   "hfov": 8.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E, this.camera_74C59A8E_61ED_08F4_41D2_78992FDC40B1); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.39,
   "image": "this.AnimatedImageResource_47688653_6104_F662_41D7_ADC24F396FD5",
   "pitch": -31.27,
   "yaw": -161.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_43D6CBAF_6107_DE21_41D1_664AB5BD1CBF",
 "maps": [
  {
   "hfov": 17.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -31.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365, this.camera_70408B0C_61ED_09F4_41C7_588A6CC88049); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.61,
   "image": "this.AnimatedImageResource_46466ECE_6105_3663_4199_1BA75C5B9664",
   "pitch": -3.52,
   "yaw": -106.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7DEF1FD7_613C_F661_41D0_2D243174F826",
 "maps": [
  {
   "hfov": 8.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7, this.camera_70468B1C_61ED_0814_41A1_8B9202DA2518); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.61,
   "image": "this.AnimatedImageResource_46478ECE_6105_3663_41D7_623313F36CFA",
   "pitch": -3.03,
   "yaw": 61.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7C9EAC22_613D_7A23_41BC_615609275412",
 "maps": [
  {
   "hfov": 8.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E, this.camera_707C6B0C_61ED_09F4_41CA_074D891E4201); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_4647DECE_6105_3663_41C1_BBE3DC6C0D82",
   "pitch": -1.61,
   "yaw": 41.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7FAD7F5B_613D_F661_41CA_845A7DF13E69",
 "maps": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D, this.camera_7035CB3B_61ED_081C_41D5_DE98A456DC1E); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.58,
   "image": "this.AnimatedImageResource_46477ECE_6105_3663_4190_EB97C5BC10ED",
   "pitch": -9.52,
   "yaw": 127.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7C8BE080_6105_CADE_41D3_441776BDB2EE",
 "maps": [
  {
   "hfov": 9.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E, this.camera_704CAB1C_61ED_0814_4185_4ED2F06F57D1); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.58,
   "image": "this.AnimatedImageResource_465A1ECE_6105_3663_41C2_AFE50D6AD096",
   "pitch": -5.53,
   "yaw": -70.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_416105D8_610B_4A6F_41B0_E7E9B33E3F11",
 "maps": [
  {
   "hfov": 8.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.11,
   "image": "this.AnimatedImageResource_46441ECE_6105_3663_41D1_AA031219B5BC",
   "pitch": -1.44,
   "yaw": 12.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7ADE3C2E_6107_3A22_41D7_883D420F7F58",
 "maps": [
  {
   "hfov": 5.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D, this.camera_751E2A6E_61ED_0834_41C1_15642F0B1834); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.11,
   "image": "this.AnimatedImageResource_46451ECE_6105_3663_4191_0C6BA4A6891B",
   "pitch": -1.01,
   "yaw": 0.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7C540085_6105_4AE1_41D3_0E5CCC705486",
 "maps": [
  {
   "hfov": 5.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC, this.camera_74E89A80_61ED_08EC_41C2_3170AAB3F256); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_46454ECE_6105_3663_41B6_5F2DA04CBE97",
   "pitch": -5.37,
   "yaw": 173,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7ABDF2A5_6104_CE26_41C9_E430D092B845",
 "maps": [
  {
   "hfov": 8.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E, this.camera_7514BA6E_61ED_0834_41C6_A25332CBC098); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.24,
   "image": "this.AnimatedImageResource_4765B653_6104_F662_41A5_D0DE7EA96B14",
   "pitch": -18.96,
   "yaw": -109.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_43E3BE74_611B_3627_41D2_EBA49BEB9A6D",
 "maps": [
  {
   "hfov": 19.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -18.96
  }
 ]
},
{
 "cursor": "hand",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "right": 30,
 "width": 49,
 "borderSize": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "horizontalAlign": "center",
 "bottom": 8,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 37,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_46469ECE_6105_3663_41C2_E6B24749B557",
   "pitch": -2.28,
   "yaw": -26.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7D232959_613D_5A6E_41BC_C608B2873AEC",
 "maps": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.57,
   "image": "this.AnimatedImageResource_46463ECE_6105_3663_41BF_61C4468693BD",
   "pitch": -6.28,
   "yaw": -169.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7CCC8896_613D_DAE3_419B_B8214A0A449F",
 "maps": [
  {
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.28
  }
 ]
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderSize": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "bottom": 53,
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": 2,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "white line"
 }
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "left": "0%",
 "paddingLeft": 30,
 "scrollBarColor": "#000000",
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "scrollBarVisible": "rollOver",
 "width": 1199,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "height": 51,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 110,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "height": 110,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "91.304%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "85.959%",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "left": "2.09%",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "width": 378,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "VESPERS COURT - Townhomes",
 "fontColor": "#FFFFFF",
 "textShadowOpacity": 1,
 "textShadowColor": "#000000",
 "top": "1.72%",
 "verticalAlign": "top",
 "minWidth": 1,
 "textShadowVerticalLength": 0,
 "height": 44,
 "fontSize": 29,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "textShadowHorizontalLength": 0,
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "right",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "5%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 4,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 4,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 6,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "right",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "5%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_71488EEA_61D7_083C_41C9_A1C4A5988D10",
 "levels": [
  {
   "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_71487EEA_61D7_083C_41C7_25FEBABE033D",
 "levels": [
  {
   "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_71482EEA_61D7_083C_41BA_9F95E1D886B3",
 "levels": [
  {
   "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_71498EEA_61D7_083C_41D6_8991956874FF",
 "levels": [
  {
   "url": "media/panorama_6EC6E4EB_61D7_383C_41C6_DECDA67BD365_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_465A9ECE_6105_3663_41D6_2CB34B951066",
 "levels": [
  {
   "url": "media/panorama_6E0BC1D6_6107_CA62_41BF_8A4C0111F5E7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_71510EE8_61D7_083C_41CF_8412391D4E1C",
 "levels": [
  {
   "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_714EFEE8_61D7_083C_41B5_229826F6685E",
 "levels": [
  {
   "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_714EAEE8_61D7_083C_41C4_CE11BBD5C863",
 "levels": [
  {
   "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_714E1EE8_61D7_083C_41D6_867CA5D4BB50",
 "levels": [
  {
   "url": "media/panorama_6CF35445_61D7_1877_41D1_BFCE524F68DC_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46593ECE_6105_3663_41D0_3451B8DF87DE",
 "levels": [
  {
   "url": "media/panorama_6E19827E_6107_4E23_41C6_0ADFB42E3B83_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_465AAECE_6105_3663_41AF_5A469F2EA8D5",
 "levels": [
  {
   "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_465AEECE_6105_3663_41D5_7A48551FCBD1",
 "levels": [
  {
   "url": "media/panorama_6E0D8C0F_6107_D9E1_41B5_CFE01D62EF7E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46596ECE_6105_3663_419B_AD2783A1F36E",
 "levels": [
  {
   "url": "media/panorama_6E0C4786_6107_36E3_41B7_5293974CAD74_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4658EECE_6105_3663_41B9_EC24FF29F893",
 "levels": [
  {
   "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46581ECE_6105_3663_41CB_92C0B93C53AA",
 "levels": [
  {
   "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4659BECE_6105_3663_41D7_6698987205CA",
 "levels": [
  {
   "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4659DECE_6105_3663_418D_895465AA6D6C",
 "levels": [
  {
   "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46590ECE_6105_3663_41B1_922043C33D37",
 "levels": [
  {
   "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_47688653_6104_F662_41D7_ADC24F396FD5",
 "levels": [
  {
   "url": "media/panorama_6E11BD2F_6107_5A21_41C7_24C1AE5DA49E_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46466ECE_6105_3663_4199_1BA75C5B9664",
 "levels": [
  {
   "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46478ECE_6105_3663_41D7_623313F36CFA",
 "levels": [
  {
   "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4647DECE_6105_3663_41C1_BBE3DC6C0D82",
 "levels": [
  {
   "url": "media/panorama_6E077959_6107_3A6E_41D0_AAC5EBA77B6D_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46477ECE_6105_3663_4190_EB97C5BC10ED",
 "levels": [
  {
   "url": "media/panorama_6E0EA3EA_6107_4E22_41D8_1CB5BC4B55E7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_465A1ECE_6105_3663_41C2_AFE50D6AD096",
 "levels": [
  {
   "url": "media/panorama_6E2727B3_6107_7622_419B_889D20685C1B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46441ECE_6105_3663_41D1_AA031219B5BC",
 "levels": [
  {
   "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46451ECE_6105_3663_4191_0C6BA4A6891B",
 "levels": [
  {
   "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46454ECE_6105_3663_41B6_5F2DA04CBE97",
 "levels": [
  {
   "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4765B653_6104_F662_41A5_D0DE7EA96B14",
 "levels": [
  {
   "url": "media/panorama_6E60FBE5_6104_FE26_41D6_E79814FE8E3E_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46469ECE_6105_3663_41C2_E6B24749B557",
 "levels": [
  {
   "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_46463ECE_6105_3663_41BF_61C4468693BD",
 "levels": [
  {
   "url": "media/panorama_6E23DF91_6104_D6FE_41CE_C407BA210220_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "data": {
  "name": "Button house info"
 },
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "fontSize": 18,
 "width": 120,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "HOUSE INFO",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "fontSize": 18,
 "width": 140,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "PANORAMA LIST",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "data": {
  "name": "Button location"
 },
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "fontSize": 18,
 "width": 100,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "LOCATION",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "data": {
  "name": "Button floorplan"
 },
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "fontSize": 18,
 "width": 113,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverFontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "FLOORPLAN",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "data": {
  "name": "Button photoalbum"
 },
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "fontSize": 18,
 "width": 122,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverFontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "PHOTOALBUM",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "data": {
  "name": "Button contact"
 },
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "fontSize": 18,
 "width": 100,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "CONTACT",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "50%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "paddingLeft": 0,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 40,
 "horizontalAlign": "center",
 "width": "25%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FF361B"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 80,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 70,
 "scrollBarColor": "#FF361B",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "width": "100%",
 "minHeight": 1,
 "itemMaxHeight": 1000,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Oswald Regular",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverItemLabelFontSize": 16,
 "itemBorderRadius": 0,
 "height": "100%",
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#C1280E",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "class": "ThumbnailGrid",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "shadow": false,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontSize": 16,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#C1280E",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "scrollBarMargin": 2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 30,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 26,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList5161"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FF361B"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 80,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/search/35.599786,+-87.054307?entry=tts&g_ep=EgoyMDI2MDcwOC4wIPu8ASoASAFQAw%3D%3D&skid=a90f5512-d935-46d0-8f89-87894bfe17b4",
 "minHeight": 1,
 "scrollEnabled": true,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "click": "this.openLink('https://www.google.com/maps/search/35.599786,+-87.054307?entry=tts&g_ep=EgoyMDI2MDcwOC4wIPu8ASoASAFQAw%3D%3D&skid=a90f5512-d935-46d0-8f89-87894bfe17b4', '_blank')",
 "height": "100%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame52781"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FF361B"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 80,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MapViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FF361B"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 80,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-photoalbum"
 },
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6"
 ],
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "50%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "paddingLeft": 0,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 40,
 "horizontalAlign": "center",
 "width": "25%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "height": "100%",
 "top": "0%",
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08"
 ],
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "width": "77.115%",
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 80,
 "paddingTop": 17,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 15,
 "width": 50,
 "borderSize": 0,
 "minHeight": 40,
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "height": 50,
 "top": 15,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "width": "77.115%",
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 80,
 "paddingTop": 17,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>LOCATION</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 15,
 "width": 70,
 "borderSize": 0,
 "minHeight": 40,
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "height": 70,
 "top": 15,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "width": "77.115%",
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 80,
 "paddingTop": 17,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 15,
 "width": 70,
 "borderSize": 0,
 "minHeight": 40,
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "height": 70,
 "top": 15,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "width": "77.115%",
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 80,
 "paddingTop": 17,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>PHOTOALBUM</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 15,
 "width": 50,
 "borderSize": 0,
 "minHeight": 40,
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "height": 50,
 "top": 15,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "height": "100%",
 "top": "0%",
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image5820"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 50,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-Container text"
 },
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073",
  "this.HTMLText_750C9A82_6107_5EE3_41CD_571EA4EE8767"
 ],
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "82.861%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 25,
 "shadow": false,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "84%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "30%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "show": "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_755EBA4E_61ED_0874_41A0_639E647C4933.set('selectedIndex', -1); }, this); this.playList_755EBA4E_61ED_0874_41A0_639E647C4933.set('selectedIndex', 0)",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#FF361B",
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.06vh;font-family:'Oswald';\"><B>VESPER TOWNHOME</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.76vh;font-family:'Oswald Regular';\">Vesper Townhomes, a modern residential design with an elegant facade and a timeless monochrome color combination.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.54vh;\">Vesper Townhomes is a thoughtfully designed multi-family residential community that combines timeless architecture with modern functionality. Featuring a sophisticated modern farmhouse aesthetic, the development showcases a harmonious blend of horizontal lap siding, vertical board-and-batten accents, clean rooflines, and a balanced monochromatic exterior palette that delivers exceptional curb appeal.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.54vh;\">Each townhome is carefully planned to provide a comfortable and efficient living experience for today's homeowners. Spacious open-concept living areas create a seamless flow between the kitchen, dining, and family spaces, while large energy-efficient windows maximize natural daylight and establish a bright, welcoming atmosphere throughout the home. Private entrances, attached garages, and well-defined outdoor spaces offer both convenience and privacy for every resident.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "data": {
  "name": "Container separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "80%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "30%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "show": "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_752B2A4E_61ED_0874_41AD_8D8C70A8473C.set('selectedIndex', -1); }, this); this.playList_752B2A4E_61ED_0874_41AD_8D8C70A8473C.set('selectedIndex', 0)",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#FF361B",
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "74.062%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.85vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.52vh;font-family:'Oswald';\"><B>VESPER TOWNHOMES</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"><B>Copyright of Vesper Court Townhomes Partnership 2026</B></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"><B>Prices, promotions, incentives, features, options, floor plans, elevations, design materials, specifications, community development plans, amenities, schedules, and available homes are subject to change without notice. Square footages and dimensions are approximate only, may vary in actual construction, and should not be relied upon as a representation of the actual or precise size of any home or amenity space. All photographs, artistic renderings, and other depictions of the residence, community and other features are preliminary and for illustrative and conceptual purposes only. Model homes and depictions of people do not reflect racial preference. Windows, decks, doors and other design features vary in the community. Views are not guaranteed. Actual views may vary and change in the future. Site plans and maps are not to scale and are for relative location purposes only. School and school district information is subject to change over time. No warranty or guarantee is made that any particular school or school district will serve the community. The information provided does not constitute an offer to sell nor a solicitation of an offer to purchase real property. Exclusively marketed and sold by April Cashion, Adventure Park Realty TREC License #279188.</B></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald Regular",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "data": {
  "name": "Button Contact"
 },
 "paddingRight": 0,
 "fontSize": "2.83vh",
 "width": 109,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "label": "CONTACT",
 "backgroundColor": [
  "#FF361B"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#FF361B",
 "id": "HTMLText_750C9A82_6107_5EE3_41CD_571EA4EE8767",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "12.072%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.87vh;font-family:'Oswald';\"><B>Apri Cashion 615-566-7270</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:2.54vh;font-family:'Oswald';\"><B>april@gardenstreetnashville.com</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
  "this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.75,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
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
