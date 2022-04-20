// 创建外壳组件App
import React, { Component } from 'react'
import hello from './Hello.module.css'

// 创建暴露App组件
export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className={hello.demo}>Hello, world!</h1>
        <p>This is a simple SPA.</p>
      </div>
    )
  }
}
