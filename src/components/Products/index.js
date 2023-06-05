export default function Products() {
  return (
      <div className="flex justify-center items-center">
        <div>
          <img className="w-36" src="/product1.png" alt="Image product" />
        </div>
        
        <div className="pl-5">
          <p className="text-gray-300">Monitor Gamer Curve 49 DQHD, 24Hz, 1ms, HDMI e...
          </p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-300 text-center font-semibold">R$ 8.599,90</span>
            <div>
              <button className="px-3 py-1 border-2 border-grayBorder text-roxo text-center">
                -
              </button>
              <span className="text-gray-300 px-3 font-semibold">1</span>
              <button className="px-3 py-1 border-2 border-roxo text-roxo text-center">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}