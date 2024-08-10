(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D72DF1CA_C0E6_A60E_41BF_05069068D673",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_D357DAF9_C0A2_7A0A_41E5_C87CD8D54CEA",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA645E70_BCC4_00B8_41CA_146E67A9546E",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "items": [
  {
   "media": "this.panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC",
   "end": "this.setComponentVisibility(this.HTMLText_7F19AA8F_6F32_D1DF_41D5_3521BB2E5D98, false, -1, this.effect_D357CAF9_C0A2_7A0A_41E4_7F696466314B, 'hideEffect', false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_D357AAF9_C0A2_7A0A_41E0_D66500E7F3C6, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_7F19AA8F_6F32_D1DF_41D5_3521BB2E5D98, false); this.setComponentVisibility(this.HTMLText_7F19AA8F_6F32_D1DF_41D5_3521BB2E5D98, true, -1, this.effect_D3562AF9_C0A2_7A0A_41B1_3D35A42EF679, 'showEffect', false); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_D357DAF9_C0A2_7A0A_41E5_C87CD8D54CEA, 'showEffect', false)",
   "camera": "this.panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_7F19AA8F_6F32_D1DF_41D5_3521BB2E5D98, true); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C",
   "end": "this.setComponentVisibility(this.HTMLText_7D272922_6F13_F0C0_41C4_EE41FF383BE8, false, -1, this.effect_AB28D1AB_BCDC_03A9_41AD_D19F403C0BA5, 'hideEffect', false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA67EE68_BCC4_00A8_41AA_B8CE55FA6FAC, 'showEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_7D272922_6F13_F0C0_41C4_EE41FF383BE8, false); this.setComponentVisibility(this.HTMLText_7D272922_6F13_F0C0_41C4_EE41FF383BE8, true, -1, this.effect_AB28C1AB_BCDC_03A9_41D8_3E8405812B72, 'showEffect', false); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA67CE68_BCC4_00A8_4193_9BDE147D4696, 'showEffect', false)",
   "camera": "this.panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_7D272922_6F13_F0C0_41C4_EE41FF383BE8, true); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7",
   "end": "this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_D37A1656_C0A7_EA06_41D5_DD8799380F6E, 'showEffect', false); this.setComponentVisibility(this.HTMLText_B524C0F9_BB44_01A9_41C3_1150519C73C1, false, -1, this.effect_D37A5656_C0A7_EA06_41DF_8E6DDA3F1941, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_D37A2655_C0A7_EA1A_41DB_7DB6E7A0F3DD, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_B524C0F9_BB44_01A9_41C3_1150519C73C1, false); this.setComponentVisibility(this.HTMLText_B524C0F9_BB44_01A9_41C3_1150519C73C1, true, -1, this.effect_D37A6656_C0A7_EA06_41C5_157B1E24CA71, 'showEffect', false)",
   "camera": "this.panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true); this.keepComponentVisibility(this.HTMLText_B524C0F9_BB44_01A9_41C3_1150519C73C1, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D",
   "end": "this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA66BE6E_BCC4_00A8_41A9_F034A013C0FA, 'showEffect', false); this.setComponentVisibility(this.HTMLText_B69452D6_BB44_01F8_41E6_0C42B9348940, false, -1, this.effect_AB2761AE_BCDC_03AB_41D0_5E5483B5615C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA669E6D_BCC4_00A8_41CD_36711C59C35D, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_B69452D6_BB44_01F8_41E6_0C42B9348940, false); this.setComponentVisibility(this.HTMLText_B69452D6_BB44_01F8_41E6_0C42B9348940, true, -1, this.effect_AB2711AE_BCDC_03AB_41DC_835E29E0585C, 'showEffect', false)",
   "camera": "this.panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true); this.keepComponentVisibility(this.HTMLText_B69452D6_BB44_01F8_41E6_0C42B9348940, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048",
   "end": "this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA644E70_BCC4_00B8_41C8_ACE7EF3181E0, 'showEffect', false); this.setComponentVisibility(this.HTMLText_B565C9F3_BB44_03B8_41BC_54DD754F9192, false, -1, this.effect_A06574C4_BCC4_01D8_41B8_E894BF411CCB, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA645E70_BCC4_00B8_41CA_146E67A9546E, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_B565C9F3_BB44_03B8_41BC_54DD754F9192, false); this.setComponentVisibility(this.HTMLText_B565C9F3_BB44_03B8_41BC_54DD754F9192, true, -1, this.effect_AA646E70_BCC4_00B8_41E7_2FF73E9CC979, 'showEffect', false)",
   "camera": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true); this.keepComponentVisibility(this.HTMLText_B565C9F3_BB44_03B8_41BC_54DD754F9192, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294",
   "end": "this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA67BE72_BCC4_00B8_41DC_652C22032EE7, 'showEffect', false); this.setComponentVisibility(this.HTMLText_B62CFB4D_BB44_00E8_41CA_B68C5BA7FACA, false, -1, this.effect_A06514C5_BCC4_01D8_41BE_F1C95B9ED8C5, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA678E71_BCC4_00B8_41DA_E055D1654CDC, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_B62CFB4D_BB44_00E8_41CA_B68C5BA7FACA, false); this.setComponentVisibility(this.HTMLText_B62CFB4D_BB44_00E8_41CA_B68C5BA7FACA, true, -1, this.effect_AA67AE72_BCC4_00B8_41D7_F8A0053A6695, 'showEffect', false)",
   "camera": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true); this.keepComponentVisibility(this.HTMLText_B62CFB4D_BB44_00E8_41CA_B68C5BA7FACA, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D",
   "end": "this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA67FE74_BCC4_00B8_41E2_4A81A6426A4E, 'showEffect', false); this.setComponentVisibility(this.HTMLText_B507FBAC_BB5C_07A8_41E1_DE1F532E326F, false, -1, this.effect_A06594C6_BCC4_01D8_41CB_82E723D3632C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA67CE73_BCC4_00B8_41E6_A8512766D130, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_B507FBAC_BB5C_07A8_41E1_DE1F532E326F, false); this.setComponentVisibility(this.HTMLText_B507FBAC_BB5C_07A8_41E1_DE1F532E326F, true, -1, this.effect_AA670E74_BCC4_00B8_41E6_D4A97A7C74A8, 'showEffect', false)",
   "camera": "this.panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true); this.keepComponentVisibility(this.HTMLText_B507FBAC_BB5C_07A8_41E1_DE1F532E326F, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094",
   "end": "this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA675E75_BCC4_00B8_41E1_C2DFD2A39757, 'showEffect', false); this.setComponentVisibility(this.HTMLText_B5CADE57_BB4C_00F8_41AB_DBB1BEC3D050, false, -1, this.effect_A062A4C7_BCC4_01D8_41D5_07D22CA7A3C2, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA672E75_BCC4_00B8_41E0_29590E142680, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_B5CADE57_BB4C_00F8_41AB_DBB1BEC3D050, false); this.setComponentVisibility(this.HTMLText_B5CADE57_BB4C_00F8_41AB_DBB1BEC3D050, true, -1, this.effect_AA677E75_BCC4_00B8_41D3_01D22E588ABF, 'showEffect', false)",
   "camera": "this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true); this.keepComponentVisibility(this.HTMLText_B5CADE57_BB4C_00F8_41AB_DBB1BEC3D050, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408",
   "end": "this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA668E77_BCC4_00B8_41E4_9A26B8870313, 'showEffect', false); this.setComponentVisibility(this.HTMLText_B5567314_BB44_007F_41AB_8D3EE6C2CAAD, false, -1, this.effect_A06524C8_BCC4_01E8_41E2_6D886D8A2252, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA669E76_BCC4_00B8_41CF_1641F1DD6203, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_B5567314_BB44_007F_41AB_8D3EE6C2CAAD, false); this.setComponentVisibility(this.HTMLText_B5567314_BB44_007F_41AB_8D3EE6C2CAAD, true, -1, this.effect_AB9B8301_BCC4_0058_41E1_09BCC0EA9595, 'showEffect', false)",
   "camera": "this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true); this.keepComponentVisibility(this.HTMLText_B5567314_BB44_007F_41AB_8D3EE6C2CAAD, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63",
   "start": "this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true); this.keepComponentVisibility(this.HTMLText_ABDB4377_BB44_00B8_41C8_B491241A3DFC, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0); this.keepComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, false); this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA66CE78_BCC4_00A8_41E5_B0C08E83648B, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_ABDB4377_BB44_00B8_41C8_B491241A3DFC, false); this.setComponentVisibility(this.HTMLText_ABDB4377_BB44_00B8_41C8_B491241A3DFC, true, -1, this.effect_AB985308_BCC4_0068_41E1_4517B12B4855, 'showEffect', false)",
   "camera": "this.panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_camera",
   "end": "this.setComponentVisibility(this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D, true, -1, this.effect_AA66FE78_BCC4_00A9_41D6_2BF53D584E53, 'showEffect', false); this.setComponentVisibility(this.HTMLText_ABDB4377_BB44_00B8_41C8_B491241A3DFC, false, -1, this.effect_A065A4C9_BCC4_01E8_41D4_7E927330D059, 'hideEffect', false); this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA67CE73_BCC4_00B8_41E6_A8512766D130",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AB28C1AB_BCDC_03A9_41D8_3E8405812B72",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA669E6D_BCC4_00A8_41CD_36711C59C35D",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA67EE68_BCC4_00A8_41AA_B8CE55FA6FAC",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_D37A5656_C0A7_EA06_41DF_8E6DDA3F1941",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -149.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6C240E1_C0E6_A63A_41B5_02CFBB8C5E4E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 143.75,
   "yaw": -77.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C"
  },
  {
   "backwardYaw": -41.22,
   "yaw": 162.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D"
  },
  {
   "backwardYaw": 86.97,
   "yaw": 125.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_t.jpg"
  }
 ],
 "label": "3_R tengah bawah",
 "id": "panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7",
 "thumbnailUrl": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_t.jpg",
 "overlays": [
  "this.overlay_B2429139_BFA1_A60A_41E3_3C9629615A76",
  "this.overlay_B20DD807_BFA1_E606_41D3_08073CA51F97",
  "this.overlay_B18E7303_BFA6_6BFE_41E3_5C7ECF3D48E3",
  "this.overlay_B182618E_BFA6_E607_41E3_F53C22A881F3",
  "this.overlay_B0E824CD_BFA6_AE05_41E6_FCC1BFF41858",
  "this.overlay_B0E3B2C4_BFE7_AA7A_41CB_D2C8AF89D201",
  "this.overlay_D144E717_C0A1_EA06_41D3_07BCD68A14C9"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "easing": "cubic_in_out",
 "id": "effect_D37A2655_C0A7_EA1A_41DB_7DB6E7A0F3DD",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_A06514C5_BCC4_01D8_41BE_F1C95B9ED8C5",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6DC015A_C0E6_A60E_41E0_D66AFF8A97EB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 82.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6E7EFAE_C0E6_DA06_41E6_EF22E0F941D1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -110.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6DA411E_C0E6_A606_41C2_D27D9FA5EBE9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA644E70_BCC4_00B8_41C8_ACE7EF3181E0",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA646E70_BCC4_00B8_41E7_2FF73E9CC979",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D74B53A2_C0E6_AA3F_41E3_45D7FA9916B6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 165.77,
   "yaw": -159.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_t.jpg"
  }
 ],
 "label": "20240502_104044 Panorama",
 "id": "panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D",
 "thumbnailUrl": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_t.jpg",
 "overlays": [
  "this.overlay_A8DD6037_BB3C_00B9_41D8_C3F34784454B",
  "this.overlay_B0B60012_BFA1_A61F_41D3_6054C1990D59",
  "this.overlay_AFE93A1E_BFBE_DA06_41D5_4C5BCD279A83",
  "this.overlay_AEB75842_BFBF_A67E_41DB_8CCFC2ADADAD",
  "this.overlay_B00BB582_BFA2_AEFF_41D7_388CF00749A6",
  "this.overlay_D186D54B_C0A6_6E0E_41E7_41FD187470B8",
  "this.overlay_D1849347_C0A7_AA06_41CF_BA28B7361BAA"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_D37A6656_C0A7_EA06_41C5_157B1E24CA71",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -104.32,
   "yaw": 69.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_t.jpg"
  }
 ],
 "label": "9_Atap",
 "id": "panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63",
 "thumbnailUrl": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_t.jpg",
 "overlays": [
  "this.overlay_38F869A0_2ACF_5DBB_418E_0CA34CED430E",
  "this.overlay_B0AFB0D3_BFA2_A61E_41C1_B8288400802B"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA678E71_BCC4_00B8_41DA_E055D1654CDC",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA669E76_BCC4_00B8_41CF_1641F1DD6203",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_D357CAF9_C0A2_7A0A_41E4_7F696466314B",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.76,
   "yaw": -97.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094"
  },
  {
   "backwardYaw": 70.97,
   "yaw": 126.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/0/{row}_{column}.jpg",
      "rowCount": 13,
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/0/{row}_{column}.jpg",
      "rowCount": 13,
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/1/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/2/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/0/{row}_{column}.jpg",
      "rowCount": 13,
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/0/{row}_{column}.jpg",
      "rowCount": 13,
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/0/{row}_{column}.jpg",
      "rowCount": 13,
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/0/{row}_{column}.jpg",
      "rowCount": 13,
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "height": 6656
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_t.jpg"
  }
 ],
 "label": "8_R Belakang",
 "id": "panorama_24F23E8B_2A3B_D78E_41C3_21791598E408",
 "thumbnailUrl": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_t.jpg",
 "overlays": [
  "this.overlay_38708F11_2ACB_B69D_41AE_CAECEB300813",
  "this.overlay_39816B38_2ACD_5E8B_41B0_3F6236941238",
  "this.overlay_B0ABFC94_BFA1_DE1A_41E3_566A2D07D66D",
  "this.overlay_AE3FED32_BFA2_5E1F_41D4_257D5B8A96E0"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "easing": "cubic_in_out",
 "id": "effect_AB9B8301_BCC4_0058_41E1_09BCC0EA9595",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA66FE78_BCC4_00A9_41D6_2BF53D584E53",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA67FE74_BCC4_00B8_41E2_4A81A6426A4E",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 121.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6D42193_C0E6_A61E_41D9_4D893D01FB10",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -109.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6F7F067_C0E6_A606_41AD_08B54D9D27CC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 126.94,
   "yaw": 70.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408"
  },
  {
   "backwardYaw": -77.99,
   "yaw": 143.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7"
  },
  {
   "backwardYaw": -35.6,
   "yaw": -58.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_t.jpg"
  }
 ],
 "label": "2_Halaman1",
 "id": "panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C",
 "thumbnailUrl": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_t.jpg",
 "overlays": [
  "this.overlay_272F1970_2AFF_3106_41C1_8D636228B4FE",
  "this.overlay_27095AD4_2AFF_530E_41BE_8C76496EB9BF",
  "this.overlay_B3D1A75B_BF61_AA0E_41B2_4794DE535406",
  "this.overlay_B2B18D84_BF67_DEFA_41E6_B6C52FF53E5A",
  "this.overlay_AEEFDDDD_BF6E_BE0A_41DC_BBFF60EA15B2",
  "this.overlay_D27AA4ED_C0AF_EE0A_41C2_F7CDCB30BB22"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -54.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D706429A_C0E6_AA0F_41C6_3391BDD35B6C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA67AE72_BCC4_00B8_41D7_F8A0053A6695",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA677E75_BCC4_00B8_41D3_01D22E588ABF",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 102.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D725F202_C0E6_A5FF_41E1_C8407C94F6F3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D7095269_C0E6_AA0D_41B9_EE4F36875F40",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_D37A1656_C0A7_EA06_41D5_DD8799380F6E",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D71D32D0_C0E6_AA1B_41D2_9D0E9E860598",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D760233A_C0E6_AA0F_41E0_65F4BAA9AE59",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 100.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6FDC029_C0E6_A60A_41E5_E865FCFD0B3A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_A06574C4_BCC4_01D8_41B8_E894BF411CCB",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 144.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D73CF236_C0E6_AA06_41C6_B538ABD5B435",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 30.89,
   "yaw": 137,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094"
  },
  {
   "backwardYaw": 69.66,
   "yaw": -104.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63"
  },
  {
   "backwardYaw": -90.62,
   "yaw": -98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_t.jpg"
  }
 ],
 "label": "6_R tengah atas",
 "id": "panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294",
 "thumbnailUrl": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_t.jpg",
 "overlays": [
  "this.overlay_3B2668CF_2A3A_DB86_41A6_79CB22305CED",
  "this.overlay_3BF9C4B4_2A3A_EB9B_41B7_C8455DE36034",
  "this.overlay_38069B7B_2AC5_5E8D_41BF_132AE3DA2206",
  "this.overlay_B09D96AC_BFA1_EA0B_41C9_4509539E41B6",
  "this.overlay_AF1D9BE2_BFAE_DA3F_41D7_E40EA0814965",
  "this.overlay_AF76D69A_BFA2_6A0E_41D6_FCCAF117C088",
  "this.overlay_B0412FB1_BFA1_BA1A_41D8_F9F1D8E955BF",
  "this.overlay_D27DB8E7_C0A2_6606_41D1_9718C9E972E8"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA67CE68_BCC4_00A8_4193_9BDE147D4696",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6FA8FE7_C0E6_DA05_41DA_73D73CCF6637",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_A065A4C9_BCC4_01E8_41D4_7E927330D059",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AB2761AE_BCDC_03AB_41D0_5E5483B5615C",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AB2711AE_BCDC_03AB_41DC_835E29E0585C",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 138.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D77D136E_C0E6_AA07_41E6_2245E3CF34B7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "touchControlMode": "drag_rotation",
 "buttonMoveRight": "this.IconButton_7DFAD312_6F0D_B0C1_41AF_6D1DBF4BB0F8",
 "buttonZoomOut": "this.IconButton_7DFA3311_6F0D_B0C3_4191_78F134DA4437",
 "buttonPause": "this.IconButton_7DFAA311_6F0D_B0C3_41D1_644FF1013160",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlayRight": "this.IconButton_7DFAE312_6F0D_B0C1_4193_E53F1CDF9577",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "buttonPlayLeft": "this.IconButton_7DFA5311_6F0D_B0C3_41C3_7DEDF8871532",
 "buttonZoomIn": "this.IconButton_7DFB0312_6F0D_B0C1_41CB_5E248F0A35E9",
 "buttonMoveUp": "this.IconButton_7DFA8311_6F0D_B0C3_41D5_24F05F33ABBE",
 "buttonMoveDown": "this.IconButton_7DFAB312_6F0D_B0C1_41BD_2B1D8670E3F5",
 "class": "PanoramaPlayer",
 "buttonMoveLeft": "this.IconButton_7DFA6311_6F0D_B0C3_41A4_1838D730F742",
 "mouseControlMode": "drag_acceleration"
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA66CE78_BCC4_00A8_41E5_B0C08E83648B",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA670E74_BCC4_00B8_41E6_D4A97A7C74A8",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA66BE6E_BCC4_00A8_41A9_F034A013C0FA",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_D357AAF9_C0A2_7A0A_41E0_D66500E7F3C6",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA67BE72_BCC4_00B8_41DC_652C22032EE7",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_A06524C8_BCC4_01E8_41E2_6D886D8A2252",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 125.9,
   "yaw": 86.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7"
  },
  {
   "backwardYaw": -98,
   "yaw": -90.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294"
  },
  {
   "backwardYaw": -159.4,
   "yaw": 165.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_t.jpg"
  }
 ],
 "label": "5_Dapur",
 "id": "panorama_25040FA5_2A3A_B585_4154_07FF86ACA048",
 "thumbnailUrl": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_t.jpg",
 "overlays": [
  "this.overlay_3AA3351C_2A3B_AA8B_41A2_0B63DB5D2AC8",
  "this.overlay_A98CF6E1_BB44_01D8_41D9_673DC16CAEFD",
  "this.overlay_B179B2AD_BFE2_AA05_41E0_6D1A9BF59F56",
  "this.overlay_B08EC4BC_BFE1_AE07_41E1_BF23E393E5A6",
  "this.overlay_B04E0239_BFA2_6A0A_4151_FE815AA0A6AA",
  "this.overlay_B168BABD_BFA3_DA0A_41D2_59D3A05FA023",
  "this.overlay_D603B3BB_C0E2_6A0E_41E0_0C06954BA21D"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA675E75_BCC4_00B8_41E1_C2DFD2A39757",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -97.02,
   "yaw": -79.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408"
  },
  {
   "backwardYaw": 137,
   "yaw": 30.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_t.jpg"
  }
 ],
 "label": "7_Balkon Dalam",
 "id": "panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094",
 "thumbnailUrl": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_t.jpg",
 "overlays": [
  "this.overlay_3BB7AB61_2AC6_BEBD_41BC_DD06F48635CE",
  "this.overlay_3E40EFDF_2AC5_D585_4198_0DDDC3B6D1CE",
  "this.overlay_B08BB7DE_BFA6_AA06_41CF_E4979F5FD903",
  "this.overlay_AE2827F3_BFA7_AA1E_41B8_5991E83056C3"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -58.4,
   "yaw": -35.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_t.jpg"
  }
 ],
 "label": "1_Pano Depan",
 "id": "panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC",
 "thumbnailUrl": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_t.jpg",
 "overlays": [
  "this.overlay_AFAE64A9_BF62_6E0A_41E5_C16E83985D99",
  "this.overlay_B0DCC20B_BF61_EA0E_41BC_C7179F6B1B48",
  "this.overlay_B0A7E357_BF61_AA06_41C7_FA07C4AB163F",
  "this.overlay_D2D6717D_C0A2_A60A_41AD_4C047A767612"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_A062A4C7_BCC4_01D8_41D5_07D22CA7A3C2",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 162.85,
   "yaw": -41.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_t.jpg"
  }
 ],
 "label": "4_Kamar",
 "id": "panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D",
 "thumbnailUrl": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_t.jpg",
 "overlays": [
  "this.overlay_3BD527CB_2A3D_558D_41C2_611645D49DCB",
  "this.overlay_B1292AA8_BFE6_7A0A_417B_03E67EFC16A5",
  "this.overlay_B17FFC1D_BFFE_7E0A_41D2_51A2C86EDD74",
  "this.overlay_D108367E_C0A6_AA06_41E0_7350E2CA03AB"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 20.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D769F305_C0E6_AA04_418B_A8B94A0F2636",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA672E75_BCC4_00B8_41E0_29590E142680",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D6CA10A6_C0E6_A606_41E3_06EB0DE17FFF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_A06594C6_BCC4_01D8_41CB_82E723D3632C",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_D3562AF9_C0A2_7A0A_41B1_3D35A42EF679",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_AB28D1AB_BCDC_03A9_41AD_D19F403C0BA5",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AA668E77_BCC4_00B8_41E4_9A26B8870313",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_AB985308_BCC4_0068_41E1_4517B12B4855",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -14.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D7406415_C0E6_AE05_41C0_DFB437517A0C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarProgressBorderColor": "#000000",
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
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
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
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
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "id": "HTMLText_7F19AA8F_6F32_D1DF_41D5_3521BB2E5D98",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Depan"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "32.88%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.26%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Kost Sekeloa 57</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:23px;\"><B><I>Tampak depan</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Kost Sekeloa 57 berlokasi di jalan Sekeloa Utara No.57 RT06/RW05, Sekeloa, Kec.Coblong, Kota Bandung, Jawa Barat</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "25.363%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_7D272922_6F13_F0C0_41C4_EE41FF383BE8",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Halaman"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "33.696%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.26%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Halaman Luar Kost</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Halaman kost dengan area yang cukup luas untuk parkir motor dan akses mudah ke pintu masuk depan maupun pintu masuk belakang.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.032%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "data": {
  "name": "Button"
 },
 "children": [
  "this.IconButton_7DFA3311_6F0D_B0C3_4191_78F134DA4437",
  "this.IconButton_7DFA5311_6F0D_B0C3_41C3_7DEDF8871532",
  "this.IconButton_7DFA6311_6F0D_B0C3_41A4_1838D730F742",
  "this.Container_7DFA7311_6F0D_B0C3_41D0_905E612D6298",
  "this.IconButton_7DFAD312_6F0D_B0C1_41AF_6D1DBF4BB0F8",
  "this.IconButton_7DFAE312_6F0D_B0C1_4193_E53F1CDF9577",
  "this.IconButton_7DFB0312_6F0D_B0C1_41CB_5E248F0A35E9"
 ],
 "layout": "horizontal",
 "left": "33.88%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "shadow": false,
 "minWidth": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "height": 139,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 4,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "id": "HTMLText_B524C0F9_BB44_01A9_41C3_1150519C73C1",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "RTengah1"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "39.402%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.26%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Ruang Tengah Lantai 1</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Ruang tengah lantai 1 memiliki ruangan yang cukup luas dan terdapat 6 kamar kost yang memiliki akses langsung ke dapur, kamar kost, dan pintu keluar depan kost.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.679%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_B69452D6_BB44_01F8_41E6_0C42B9348940",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Kamar"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "33.696%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.26%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Kamar Kost</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Kamar kost yang cukup luas, berukuran 3x3 meter, dan dilengkapi dengan fasilitas dalam kamar berupa kasur.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.032%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_B565C9F3_BB44_03B8_41BC_54DD754F9192",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Dapur"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "33.696%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.26%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Dapur Kost</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Dapur kost memiliki beberapa fasilitas memasak dan memiliki akses langsung ke lantai 2 serta kamar mandi di lantai 1, yang berjumlah 2 kamar mandi.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.355%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_B62CFB4D_BB44_00E8_41CA_B68C5BA7FACA",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "RTengah2"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "39.312%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.26%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Ruang Tengah Lantai 2</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Ruang tengah yang terletak di lantai 2, terdapat 8 kamar kost dan ruang ini memiliki akses ke balkon depan, balkon dalam, dan lantai 3.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.032%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_B5CADE57_BB4C_00F8_41AB_DBB1BEC3D050",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "BalkonD"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "33.696%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.26%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Balkon Dalam</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Pada balkon dalam terdapat 6 kamar kost, yang juga memiliki akses ke ruang belakang dan ruang tengah di lantai 2.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.355%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_B5567314_BB44_007F_41AB_8D3EE6C2CAAD",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "RuangB"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "33.696%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.26%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Ruang Belakang</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Di ruang belakang terdapat 9 kamar kost, dan memiliki akses ke balkon dalam dan halaman.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.355%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_B507FBAC_BB5C_07A8_41E1_DE1F532E326F",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "KamarMandi"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "33.696%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.25%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>Kamar Mandi</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Kamar mandi ini memiliki ventilasi yang baik serta dilengkapi dengan bak mandi dan kloset jongkok.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.355%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_ABDB4377_BB44_00B8_41C8_B491241A3DFC",
 "left": "2.26%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Rooftop"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "33.696%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 20,
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "2.25%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0.81,
 "shadowOpacity": 0.45,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B><I>Rooftop</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:Tahoma, Geneva, sans-serif;\">Di halaman rooftop yang cukup luas ini, dapat digunakan untuk menjemur pakaian.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "shadowVerticalLength": 3,
 "height": "20.355%",
 "visible": false,
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C, this.camera_D760233A_C0E6_AA0F_41E0_65F4BAA9AE59); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AFAA60A2_BF61_E63E_41E5_C1574875DCED",
   "pitch": 7.34,
   "yaw": -77.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.21,
   "distance": 100
  }
 ],
 "id": "overlay_B2429139_BFA1_A60A_41E3_3C9629615A76",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -77.99,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.21,
   "pitch": 7.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Halaman"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_1_0.png",
      "width": 561,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 2.43,
   "yaw": -74.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.12,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B20DD807_BFA1_E606_41D3_08073CA51F97",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_1_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -74.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.12,
   "pitch": 2.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D, this.camera_D77D136E_C0E6_AA07_41E6_2245E3CF34B7); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AFAAA0A3_BF61_E63E_41D0_F9E69C66FD3F",
   "pitch": 8.25,
   "yaw": 162.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.19,
   "distance": 100
  }
 ],
 "id": "overlay_B18E7303_BFA6_6BFE_41E3_5C7ECF3D48E3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 162.85,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.19,
   "pitch": 8.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048, this.camera_D74B53A2_C0E6_AA3F_41E3_45D7FA9916B6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AFAA80A3_BF61_E63E_41C8_CA4B2EBEC332",
   "pitch": -13.38,
   "yaw": 125.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.02,
   "distance": 100
  }
 ],
 "id": "overlay_B182618E_BFA6_E607_41E3_F53C22A881F3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 125.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.02,
   "pitch": -13.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Dapur Kost"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_4_0.png",
      "width": 549,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ]
   },
   "pitch": 8.77,
   "yaw": 141.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.71,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B0E824CD_BFA6_AE05_41E6_FCC1BFF41858",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_4_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 141.87,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.71,
   "pitch": 8.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Kamar Kost"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_5_0.png",
      "width": 554,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ]
   },
   "pitch": 4.02,
   "yaw": 164.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.97,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B0E3B2C4_BFE7_AA7A_41CB_D2C8AF89D201",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_5_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 164.76,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.97,
   "pitch": 4.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0_HS_6_0.png",
      "width": 500,
      "class": "ImageResourceLevel",
      "height": 500
     }
    ]
   },
   "pitch": 4.02,
   "yaw": 135.06,
   "hfov": 11.67
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D144E717_C0A1_EA06_41D3_07BCD68A14C9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 135.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.67,
   "pitch": 4.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048, this.camera_D7406415_C0E6_AE05_41C0_DFB437517A0C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_ABF4E7CB_BCC4_0FE8_41B4_B6A1FB7F0548",
   "pitch": -10.5,
   "yaw": -159.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.84,
   "distance": 100
  }
 ],
 "id": "overlay_A8DD6037_BB3C_00B9_41D8_C3F34784454B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -159.4,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.84,
   "pitch": -10.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Bak Ma\u0002ndi"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_1_0.png",
      "width": 470,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 38.86,
   "yaw": -58.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.81,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B0B60012_BFA1_A61F_41D3_6054C1990D59",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -58.3,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.81,
   "pitch": 38.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Dapur"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_2_0.png",
      "width": 463,
      "class": "ImageResourceLevel",
      "height": 243
     }
    ]
   },
   "pitch": -20.79,
   "yaw": -158.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.31,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_AFE93A1E_BFBE_DA06_41D5_4C5BCD279A83",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_2_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -158.59,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.31,
   "pitch": -20.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Kloset Jongkok"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_3_0.png",
      "width": 623,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ]
   },
   "pitch": -29.6,
   "yaw": 54.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.42,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_AEB75842_BFBF_A67E_41DB_8CCFC2ADADAD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_3_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 54.78,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.42,
   "pitch": -29.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Bak Mandi"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_6_0.png",
      "width": 490,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ]
   },
   "pitch": -15.77,
   "yaw": 90.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.42,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B00BB582_BFA2_AEFF_41D7_388CF00749A6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_6_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.58,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.42,
   "pitch": -15.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_7_0.png",
      "width": 500,
      "class": "ImageResourceLevel",
      "height": 500
     }
    ]
   },
   "pitch": -37.74,
   "yaw": 53.91,
   "hfov": 11.24
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D186D54B_C0A6_6E0E_41E7_41FD187470B8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 53.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.24,
   "pitch": -37.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_8_0.png",
      "width": 500,
      "class": "ImageResourceLevel",
      "height": 500
     }
    ]
   },
   "pitch": -20.41,
   "yaw": 85.96,
   "hfov": 13.33
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1849347_C0A7_AA06_41CF_BA28B7361BAA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 85.96,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.33,
   "pitch": -20.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294, this.camera_D7095269_C0E6_AA0D_41B9_EE4F36875F40); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AFAE20C5_BF61_E67A_41E6_7F428A832D34",
   "pitch": 1.81,
   "yaw": 69.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.68,
   "distance": 100
  }
 ],
 "id": "overlay_38F869A0_2ACF_5DBB_418E_0CA34CED430E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 69.66,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.68,
   "pitch": 1.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Tengah Lantai 2"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0_HS_1_0.png",
      "width": 902,
      "class": "ImageResourceLevel",
      "height": 206
     }
    ]
   },
   "pitch": -4.51,
   "yaw": 70.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.72,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B0AFB0D3_BFA2_A61E_41C1_B8288400802B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0_HS_1_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 70.19,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.72,
   "pitch": -4.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094, this.camera_D6FDC029_C0E6_A60A_41E5_E865FCFD0B3A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_38BED1F7_2ACB_AD85_41BA_E675BA4E4F9F",
   "pitch": -25.16,
   "yaw": -97.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.71,
   "distance": 100
  }
 ],
 "id": "overlay_38708F11_2ACB_B69D_41AE_CAECEB300813",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.71,
   "pitch": -25.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C, this.camera_D6F7F067_C0E6_A606_41AD_08B54D9D27CC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5289EF_2AC6_FD85_41AC_611F04F3DDBC",
   "pitch": -31.61,
   "yaw": 126.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.04,
   "distance": 100
  }
 ],
 "id": "overlay_39816B38_2ACD_5E8B_41B0_3F6236941238",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 126.94,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.04,
   "pitch": -31.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Halaman"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0_HS_2_0.png",
      "width": 522,
      "class": "ImageResourceLevel",
      "height": 271
     }
    ]
   },
   "pitch": -25.71,
   "yaw": 127.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.67,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B0ABFC94_BFA1_DE1A_41E3_566A2D07D66D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0_HS_2_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 127.08,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.67,
   "pitch": -25.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Balkon Dalam"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0_HS_3_0.png",
      "width": 768,
      "class": "ImageResourceLevel",
      "height": 279
     }
    ]
   },
   "pitch": -19.81,
   "yaw": -96.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.33,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_AE3FED32_BFA2_5E1F_41D4_257D5B8A96E0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0_HS_3_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -96.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.33,
   "pitch": -19.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408, this.camera_D72DF1CA_C0E6_A60E_41BF_05069068D673); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3AAFC2D7_2AF1_D30A_41BD_E9858FE9D40D",
   "pitch": -3.31,
   "yaw": 70.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.53,
   "distance": 100
  }
 ],
 "id": "overlay_272F1970_2AFF_3106_41C1_8D636228B4FE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 70.97,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.53,
   "pitch": -3.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7, this.camera_D725F202_C0E6_A5FF_41E1_C8407C94F6F3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3AAF32DB_2AF1_D33A_41C4_4150269C7D5F",
   "pitch": -2.32,
   "yaw": 143.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.27,
   "distance": 100
  }
 ],
 "id": "overlay_27095AD4_2AFF_530E_41BE_8C76496EB9BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 143.75,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.27,
   "pitch": -2.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Pintu Depan"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0_HS_3_0.png",
      "width": 513,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ]
   },
   "pitch": -6.29,
   "yaw": 145.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.11,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B3D1A75B_BF61_AA0E_41B2_4794DE535406",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0_HS_3_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 145.03,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.11,
   "pitch": -6.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Pagar Depan Kost"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0_HS_4_0.png",
      "width": 842,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ]
   },
   "pitch": -21.02,
   "yaw": -58.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.2,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B2B18D84_BF67_DEFA_41E6_B6C52FF53E5A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0_HS_4_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -58.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.2,
   "pitch": -21.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Pintu Belakang"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0_HS_5_0.png",
      "width": 513,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ]
   },
   "pitch": -7.47,
   "yaw": 71.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.12,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_AEEFDDDD_BF6E_BE0A_41DC_BBFF60EA15B2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0_HS_5_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 71.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.12,
   "pitch": -7.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC, this.camera_D73CF236_C0E6_AA06_41C6_B538ABD5B435); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D2121C43_C0A1_BE7D_41C4_63B6B68975A8",
   "pitch": -14.64,
   "yaw": -58.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.89,
   "distance": 100
  }
 ],
 "id": "overlay_D27AA4ED_C0AF_EE0A_41C2_F7CDCB30BB22",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -58.4,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.89,
   "pitch": -14.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094, this.camera_D6C240E1_C0E6_A63A_41B5_02CFBB8C5E4E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AFA830A6_BF61_E606_41E4_2453D97858C0",
   "pitch": -18.58,
   "yaw": 137,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.65,
   "distance": 100
  }
 ],
 "id": "overlay_3B2668CF_2A3A_DB86_41A6_79CB22305CED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 137,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.65,
   "pitch": -18.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25040FA5_2A3A_B585_4154_07FF86ACA048, this.camera_D6DC015A_C0E6_A60E_41E0_D66AFF8A97EB); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5479E9_2AC6_FD8C_41A5_4507AB1C7E8E",
   "pitch": -20.32,
   "yaw": -98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.47,
   "distance": 100
  }
 ],
 "id": "overlay_3BF9C4B4_2A3A_EB9B_41B7_C8455DE36034",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -98,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.47,
   "pitch": -20.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63, this.camera_D6DA411E_C0E6_A606_41C2_D27D9FA5EBE9); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3C065819_2ACA_BA8D_41C4_9CD75DBF4A3F",
   "pitch": -3.52,
   "yaw": -104.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.13,
   "distance": 100
  }
 ],
 "id": "overlay_38069B7B_2AC5_5E8D_41BF_132AE3DA2206",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -104.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.13,
   "pitch": -3.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Rooftop"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_3_0.png",
      "width": 269,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ]
   },
   "pitch": -1.13,
   "yaw": -103.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.54,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B09D96AC_BFA1_EA0B_41C9_4509539E41B6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_3_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -103.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.54,
   "pitch": -1.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Dapur"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_4_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ]
   },
   "pitch": -16.24,
   "yaw": -97.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.23,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_AF1D9BE2_BFAE_DA3F_41D7_E40EA0814965",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.29,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.23,
   "pitch": -16.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Balkon Dalam"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_5_0.png",
      "width": 415,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ]
   },
   "pitch": -14.26,
   "yaw": 137.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.23,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_AF76D69A_BFA2_6A0E_41D6_FCCAF117C088",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_5_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 137.33,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.23,
   "pitch": -14.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Balkon Luar"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_6_0.png",
      "width": 365,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ]
   },
   "pitch": -0.14,
   "yaw": -49.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.2,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B0412FB1_BFA1_BA1A_41D8_F9F1D8E955BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_6_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -49.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.2,
   "pitch": -0.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_8_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 268
     }
    ]
   },
   "pitch": -3.04,
   "yaw": -52.84,
   "hfov": 6.86
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D27DB8E7_C0A2_6606_41D1_9718C9E972E8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "yaw": -52.84,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.86,
   "pitch": -3.04
  }
 ]
},
{
 "width": 32,
 "id": "IconButton_7DFAD312_6F0D_B0C1_41AF_6D1DBF4BB0F8",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFAD312_6F0D_B0C1_41AF_6D1DBF4BB0F8.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFAD312_6F0D_B0C1_41AF_6D1DBF4BB0F8_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFAD312_6F0D_B0C1_41AF_6D1DBF4BB0F8_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34602"
 }
},
{
 "width": 32,
 "id": "IconButton_7DFA3311_6F0D_B0C3_4191_78F134DA4437",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFA3311_6F0D_B0C3_4191_78F134DA4437.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFA3311_6F0D_B0C3_4191_78F134DA4437_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFA3311_6F0D_B0C3_4191_78F134DA4437_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34594"
 }
},
{
 "width": 40,
 "id": "IconButton_7DFAA311_6F0D_B0C3_41D1_644FF1013160",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFAA311_6F0D_B0C3_41D1_644FF1013160.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 40,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFAA311_6F0D_B0C3_41D1_644FF1013160_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFAA311_6F0D_B0C3_41D1_644FF1013160_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34600"
 }
},
{
 "width": 40,
 "id": "IconButton_7DFAE312_6F0D_B0C1_4193_E53F1CDF9577",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFAE312_6F0D_B0C1_4193_E53F1CDF9577.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFAE312_6F0D_B0C1_4193_E53F1CDF9577_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFAE312_6F0D_B0C1_4193_E53F1CDF9577_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34603"
 }
},
{
 "width": 40,
 "id": "IconButton_7DFA5311_6F0D_B0C3_41C3_7DEDF8871532",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFA5311_6F0D_B0C3_41C3_7DEDF8871532.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFA5311_6F0D_B0C3_41C3_7DEDF8871532_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFA5311_6F0D_B0C3_41C3_7DEDF8871532_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34596"
 }
},
{
 "width": 32,
 "id": "IconButton_7DFB0312_6F0D_B0C1_41CB_5E248F0A35E9",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFB0312_6F0D_B0C1_41CB_5E248F0A35E9.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFB0312_6F0D_B0C1_41CB_5E248F0A35E9_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFB0312_6F0D_B0C1_41CB_5E248F0A35E9_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34605"
 }
},
{
 "width": 32,
 "id": "IconButton_7DFA8311_6F0D_B0C3_41D5_24F05F33ABBE",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFA8311_6F0D_B0C3_41D5_24F05F33ABBE.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFA8311_6F0D_B0C3_41D5_24F05F33ABBE_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFA8311_6F0D_B0C3_41D5_24F05F33ABBE_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34599"
 }
},
{
 "width": 32,
 "id": "IconButton_7DFAB312_6F0D_B0C1_41BD_2B1D8670E3F5",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFAB312_6F0D_B0C1_41BD_2B1D8670E3F5.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFAB312_6F0D_B0C1_41BD_2B1D8670E3F5_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFAB312_6F0D_B0C1_41BD_2B1D8670E3F5_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34601"
 }
},
{
 "width": 32,
 "id": "IconButton_7DFA6311_6F0D_B0C3_41A4_1838D730F742",
 "transparencyActive": false,
 "minHeight": 0,
 "iconURL": "skin/IconButton_7DFA6311_6F0D_B0C3_41A4_1838D730F742.png",
 "shadow": false,
 "minWidth": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DFA6311_6F0D_B0C3_41A4_1838D730F742_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7DFA6311_6F0D_B0C3_41A4_1838D730F742_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34597"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294, this.camera_D71D32D0_C0E6_AA1B_41D2_9D0E9E860598); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D6A2217E_C0E2_6607_41AD_3E6EE0AB82A3",
   "pitch": -26.06,
   "yaw": -90.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.64,
   "distance": 100
  }
 ],
 "id": "overlay_3AA3351C_2A3B_AA8B_41A2_0B63DB5D2AC8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.62,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.64,
   "pitch": -26.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7, this.camera_D706429A_C0E6_AA0F_41C6_3391BDD35B6C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D8226050_C0E3_E61A_41E3_9D5F26AEE4C0",
   "pitch": -30.25,
   "yaw": 86.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.8,
   "distance": 100
  }
 ],
 "id": "overlay_A98CF6E1_BB44_01D8_41D9_673DC16CAEFD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 86.97,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.8,
   "pitch": -30.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Tengah Lantai 1"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_3_0.png",
      "width": 992,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ]
   },
   "pitch": -22.11,
   "yaw": 87.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.65,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B179B2AD_BFE2_AA05_41E0_6D1A9BF59F56",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_3_0_map.gif",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 87.68,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.65,
   "pitch": -22.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Tengah Lantai 2"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_4_0.png",
      "width": 982,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ]
   },
   "pitch": -3.74,
   "yaw": -89.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.28,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B08EC4BC_BFE1_AE07_41E1_BF23E393E5A6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_4_0_map.gif",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -89.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 26.28,
   "pitch": -3.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Kamar Mandi"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_5_0.png",
      "width": 638,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ]
   },
   "pitch": -9.61,
   "yaw": 166.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.88,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B04E0239_BFA2_6A0A_4151_FE815AA0A6AA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_5_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 166.34,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.88,
   "pitch": -9.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D, this.camera_D769F305_C0E6_AA04_418B_A8B94A0F2636); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AFAB80A6_BF61_E606_41D0_E75888DC4900",
   "pitch": -3.8,
   "yaw": 165.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.57,
   "distance": 100
  }
 ],
 "id": "overlay_B168BABD_BFA3_DA0A_41D2_59D3A05FA023",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 165.77,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.57,
   "pitch": -3.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_11_0.png",
      "width": 651,
      "class": "ImageResourceLevel",
      "height": 619
     }
    ]
   },
   "pitch": 3.14,
   "yaw": -88.49,
   "hfov": 17.44
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D603B3BB_C0E2_6A0E_41E0_0C06954BA21D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -88.49,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.44,
   "pitch": 3.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24F23E8B_2A3B_D78E_41C3_21791598E408, this.camera_D6E7EFAE_C0E6_DA06_41E6_EF22E0F941D1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3F3BCBEC_2AC5_FD8B_41A6_BC408A16880D",
   "pitch": -42.74,
   "yaw": -79.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.72,
   "distance": 100
  }
 ],
 "id": "overlay_3BB7AB61_2AC6_BEBD_41BC_DD06F48635CE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -79.76,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.72,
   "pitch": -42.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294, this.camera_D6FA8FE7_C0E6_DA05_41DA_73D73CCF6637); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E55B9EC_2AC6_FD8B_41BE_BA2B909358C7",
   "pitch": -3.83,
   "yaw": 30.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.88,
   "distance": 100
  }
 ],
 "id": "overlay_3E40EFDF_2AC5_D585_4198_0DDDC3B6D1CE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 30.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.88,
   "pitch": -3.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Belakang"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0_HS_2_0.png",
      "width": 645,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ]
   },
   "pitch": -37.51,
   "yaw": -79.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.49,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B08BB7DE_BFA6_AA06_41CF_E4979F5FD903",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0_HS_2_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -79.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.49,
   "pitch": -37.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Tengah Lantai 2"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0_HS_3_0.png",
      "width": 850,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ]
   },
   "pitch": 0.07,
   "yaw": 31.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.45,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_AE2827F3_BFA7_AA1E_41B8_5991E83056C3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0_HS_3_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 31.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.45,
   "pitch": 0.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Halaman"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0_HS_1_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 5.96,
   "yaw": -35.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.13,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_AFAE64A9_BF62_6E0A_41E5_C16E83985D99",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0_HS_1_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -35.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.13,
   "pitch": 5.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_AFD580A1_BF61_E63A_41DD_63FEF801FAFC",
   "pitch": 7.77,
   "yaw": 9.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.66,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B0DCC20B_BF61_EA0E_41BC_C7179F6B1B48",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 9.83,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.66,
   "pitch": 7.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Kost Sekeloa 57"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_1_HS_3_0.png",
      "width": 517,
      "class": "ImageResourceLevel",
      "height": 162
     }
    ]
   },
   "pitch": 4.38,
   "yaw": 10.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.23,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B0A7E357_BF61_AA06_41C7_FA07C4AB163F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_1_HS_3_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 10.14,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.23,
   "pitch": 4.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C, this.camera_D6D42193_C0E6_A61E_41D9_4D893D01FB10); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D248299C_C0A2_A60A_41E1_0B99028EC603",
   "pitch": 9.24,
   "yaw": -35.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.26,
   "distance": 100
  }
 ],
 "id": "overlay_D2D6717D_C0A2_A60A_41AD_4C047A767612",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -35.6,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.26,
   "pitch": 9.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7, this.camera_D6CA10A6_C0E6_A606_41E3_06EB0DE17FFF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5709E7_2AC6_FD85_4195_B47D56C78832",
   "pitch": -0.11,
   "yaw": -41.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.76,
   "distance": 100
  }
 ],
 "id": "overlay_3BD527CB_2A3D_558D_41C2_611645D49DCB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -41.22,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.76,
   "pitch": -0.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Tengah Lantai 1"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0_HS_1_0.png",
      "width": 724,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -6.68,
   "yaw": -40.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.35,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B1292AA8_BFE6_7A0A_417B_03E67EFC16A5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0_HS_1_0_map.gif",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -40.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.35,
   "pitch": -6.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Kasur"
 },
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0_HS_3_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": -33.8,
   "yaw": 156.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.74,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_B17FFC1D_BFFE_7E0A_41D2_51A2C86EDD74",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 156.03,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.74,
   "pitch": -33.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0_HS_4_0.png",
      "width": 531,
      "class": "ImageResourceLevel",
      "height": 606
     }
    ]
   },
   "pitch": -39.61,
   "yaw": 151.54,
   "hfov": 10.45
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D108367E_C0A6_AA06_41E0_7350E2CA03AB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "yaw": 151.54,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.45,
   "pitch": -39.61
  }
 ]
},
{
 "data": {
  "name": "Container34598"
 },
 "children": [
  "this.IconButton_7DFA8311_6F0D_B0C3_41D5_24F05F33ABBE",
  "this.IconButton_7DFAA311_6F0D_B0C3_41D1_644FF1013160",
  "this.IconButton_7DFAB312_6F0D_B0C1_41BD_2B1D8670E3F5"
 ],
 "layout": "vertical",
 "width": 40,
 "scrollBarColor": "#000000",
 "id": "Container_7DFA7311_6F0D_B0C3_41D0_905E612D6298",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "class": "Container",
 "gap": 4,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AFAA60A2_BF61_E63E_41E5_C1574875DCED",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AFAAA0A3_BF61_E63E_41D0_F9E69C66FD3F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_B1A4EA5E_BFA3_DA07_41D2_0725E4FE7DB7_1_HS_3_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AFAA80A3_BF61_E63E_41C8_CA4B2EBEC332",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_ABDB6DD6_BB4C_03F8_41D6_ACCA0020BE7D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_ABF4E7CB_BCC4_0FE8_41B4_B6A1FB7F0548",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24ECBDC8_2A3B_758B_41C0_933D6141DD63_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AFAE20C5_BF61_E67A_41E6_7F428A832D34",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_38BED1F7_2ACB_AD85_41BA_E675BA4E4F9F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24F23E8B_2A3B_D78E_41C3_21791598E408_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3E5289EF_2AC6_FD85_41AC_611F04F3DDBC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3AAFC2D7_2AF1_D30A_41BD_E9858FE9D40D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3AAF32DB_2AF1_D33A_41C4_4150269C7D5F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_212EBA21_2AF3_5306_41B3_78C9DB9EC47C_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D2121C43_C0A1_BE7D_41C4_63B6B68975A8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AFA830A6_BF61_E606_41E4_2453D97858C0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3E5479E9_2AC6_FD8C_41A5_4507AB1C7E8E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24FEBC31_2A3A_DA9A_41A9_C72F8B4F7294_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3C065819_2ACA_BA8D_41C4_9CD75DBF4A3F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D6A2217E_C0E2_6607_41AD_3E6EE0AB82A3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D8226050_C0E3_E61A_41E3_9D5F26AEE4C0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_25040FA5_2A3A_B585_4154_07FF86ACA048_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AFAB80A6_BF61_E606_41D0_E75888DC4900",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3F3BCBEC_2AC5_FD8B_41A6_BC408A16880D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24EC22CD_2A3B_6F8A_4199_10F5FDBCF094_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3E55B9EC_2AC6_FD8B_41BE_BA2B909358C7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AFD580A1_BF61_E63A_41DD_63FEF801FAFC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AF44B5CD_BF67_AE0A_41E3_E0E718A980AC_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D248299C_C0A2_A60A_41E1_0B99028EC603",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_24F8A24F_2A3D_6E85_41C2_16AF7FA1F75D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3E5709E7_2AC6_FD85_4195_B47D56C78832",
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "start": "this.init()",
 "data": {
  "name": "Player14024"
 },
 "children": [
  "this.MainViewer",
  "this.HTMLText_7F19AA8F_6F32_D1DF_41D5_3521BB2E5D98",
  "this.HTMLText_7D272922_6F13_F0C0_41C4_EE41FF383BE8",
  "this.Container_7DFB1312_6F0D_B0C1_41DB_1B328735369D",
  "this.HTMLText_B524C0F9_BB44_01A9_41C3_1150519C73C1",
  "this.HTMLText_B69452D6_BB44_01F8_41E6_0C42B9348940",
  "this.HTMLText_B565C9F3_BB44_03B8_41BC_54DD754F9192",
  "this.HTMLText_B62CFB4D_BB44_00E8_41CA_B68C5BA7FACA",
  "this.HTMLText_B5CADE57_BB4C_00F8_41AB_DBB1BEC3D050",
  "this.HTMLText_B5567314_BB44_007F_41AB_8D3EE6C2CAAD",
  "this.HTMLText_B507FBAC_BB5C_07A8_41E1_DE1F532E326F",
  "this.HTMLText_ABDB4377_BB44_00B8_41C8_B491241A3DFC"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "width": "100%",
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "class": "Player",
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
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
