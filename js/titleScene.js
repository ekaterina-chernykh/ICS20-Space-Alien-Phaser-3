/* global Phaser */

// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by Ekaterina
// Created on: Nov 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene{
  constructor() {
    super({ key: "titleScene"})
  }
  init(data) {
    this.cameras.main.setBackgroundColor("#a0d8f3")
  }
  preload() {
    console.log("Title Scene")
  }
  create(data){
    
  }
  update(time, delta) {
    
  }
}

export default TitleScene