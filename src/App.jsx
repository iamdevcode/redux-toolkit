import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './store/counterSlice'
import { Button } from './ui/Buttons'

export default function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <main className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-xl">
        Counter: <span className="font-bold">{counter}</span>
      </h1>
      <div className="flex items-center gap-x-1">
        <Button
          width={50}
          height={40}
          title="+"
          color="#fff"
          backgroundColor="#09f"
          onPress={() => dispatch(increment())}
          big
        />
        <Button
          width={50}
          height={40}
          title="0"
          color="#fff"
          backgroundColor="#09f"
          onPress={() => dispatch(reset())}
          big
        />
        <Button
          width={50}
          height={40}
          title="-"
          color="#fff"
          backgroundColor="#09f"
          onPress={() => dispatch(decrement(5))}
          big
        />
      </div>
    </main>
  )
}
