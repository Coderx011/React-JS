import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrrencyinfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [converted, setConverted] = useState(0)

  const currencyInfo  = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(converted)
    setConverted(amount)

  }

 const convert = ()=>{
  setConverted(amount* currencyInfo[to])
 }
 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `https://unsplash.com/photos/green-trees-under-white-sky-during-daytime-uyyRJA2an4ohttps://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3Durl('https://www.pexels.com/photo/selective-focus-photography-of-green-bird-1774927/')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                    convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOption={options}
                          onCurrencyChange={(currency)=> setAmount(amount)}
                          onAmountChange={(amount)=>setAmount(amount)}
                          selectCurrency={from}

                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={converted}
                          currencyOption={options}
                          onCurrencyChange={(currency)=> setTo(currency)}
                          selectCurrency={from}
                          
                          amountDIsable 
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase() } to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
