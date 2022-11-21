/* global Phaser */

// Copyright (c) 2022 Ekaterina all rights reserved
//
// Created by: Ekaterina
// Created on: Nov 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: "splashScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload(){
    console.log("Splash Scene")
  }

  create (data) {
    
  }

  update (time, delta){
    this.scene.switch("titleScene")
  }
}

export default SplashScene