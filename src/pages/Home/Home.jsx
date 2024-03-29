import React from 'react'
import CheckIcon from '../../assets/img/check.png'
import EditIcon from '../../assets/img/edit.png'
import './Home.css'

function Home() {
  const fn = (e) => {

  }
  return (
    <div className='main'>
      <div className="container">
        <div className="main__inner">
          <div className="main__inner-nav">
            <h2>Qurilma turini tanlang:</h2>
            <select onChange={fn}>
              <option>Kompyuter</option>
              <option>Printerlar</option>
              <option>Proektorlar</option>
              <option>Wi-Fi routerlar</option>
              <option>Kameralar</option>
            </select>
          </div>
          <div className="main__inner-hero">
            <div className="right">
              <div className="total">
                <h4>Umumiy soni:</h4>
                <div>
                  <span>112</span>
                </div>
                <button><img src={CheckIcon} alt="" /></button>
              </div>
              <div className="work">
                <h4>Ish faoliyatida:</h4>
                <span>108</span>
                <button><img src={EditIcon} alt="" /></button>
              </div>
              <div className="broken">
                <h4>Buzilgan:</h4>
                <span>4</span>
                <button>
                  <img src={EditIcon} alt="" />
                </button>
              </div>
            </div>
            <div className="left">
              <div className="add">
                <h4>Yangi qo‘shildi:</h4>
                <input className='add-inp' type="number" />
                <button className='add-btn'><img src={CheckIcon} alt="" /></button>
              </div>
              <div className="repaired">
                <h4>Ta’mirlandi:</h4>
                <input className='repaired-inp' type="number" />
                <button className='repaired-btn'><img src={CheckIcon} alt="" /></button>
              </div>
              <div className="broken">
                <h4>Buzildi:</h4>
                <input className='broken-inp' type="number" />
                <button className='broken-btn'>
                  <img src={CheckIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="main__inner-footer">
            <div className="day">
              <h4>Sana:</h4>
              <span>12.03.2023</span>
              <button><img src={EditIcon} alt="" /></button>
            </div>
            <div className="btns">
              <a className='btn' href="/">O‘zgartirishlarni bekor qilish</a>
              <button>O‘zgaririshlarni saqlash</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
