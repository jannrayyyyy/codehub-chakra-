import CustomHeader from '@/components/header/head'
import Head from 'next/head'
import { useState } from 'react'

export default function Sarcastic() {
  const [animalInput, setAnimalInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState()

  async function onSubmit(event: any) {
    event.preventDefault()
    if (loading) {
      return
    }
    setLoading(true)

    try {
      const response = await fetch('/api/generate-translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: animalInput }),
      })

      const data = await response.json()
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        )
      }
      const regEx = data.result.replaceAll(`\n`, `<br>`)
      setResult(data.result)
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <CustomHeader />
      <main className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <form onSubmit={onSubmit} className={'grid'}>
            <textarea
              name="animal"
              id=""
              cols={30}
              rows={10}
              placeholder="Enter a question"
              value={animalInput}
              className={''}
              onChange={(e) => setAnimalInput(e.target.value)}
            ></textarea>
            <input type="submit" value="Translate code" />
          </form>
        </div>
        <div className={''}>
          {loading ? <p>Loading..</p> : <p className="text-white">{result}</p>}
        </div>
      </main>
    </div>
  )
}
