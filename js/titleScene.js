/* global Phaser */

// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by Ekaterina
// Created on: Nov 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene{
  constructor() {
    super({ key: "titleScene"})

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "fde4b9",
      align: "center",
    }
  }
  
  init(data) {
    this.cameras.main.setBackgroundColor("#a0d8f3")
  }
  
  preload() {
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "assets/aliens_screen_image.jpg")
  }
  
  create(data){
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add
    .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle)
    .setOrgin(0.5)
  }
  update(time, delta) {
    
  }
}

export default TitleScene