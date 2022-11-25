/* global Phaser */ 

// Copyright (c) 2022 Ekaterina
// Created by: Ekaterina
// Created on: Nov 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: "menuScene" })
  }
  init(data) {
    this.camera.main.setBackgroundColor("ffffff")
  }
  preload() {
    console.log("Menu Scene")
  }
  create(data){
    
  }
  update(time, delta) {
    
  }
}

export default MenuScene