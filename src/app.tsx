import { useState } from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import WorldMap from './components/WorldMap'
import Locations from './coordinates.json'
import { Coordinate } from './types/utils'

const LocationData  = Locations as unknown as Record<string, Record<string,Coordinate>>

const App: React.FC = () => {
  const [regions, setRegions] = useState<string[]>([])
  const [ping, setPing] = useState<Record<string, number>>({})
  const [cloudProvider, setCloudProvider] = useState<string>('aws')

  return (
    <>
   <MainWrapper>
        <SecondWrapper>
          <Sidebar
            locations={Object.keys(LocationData[cloudProvider])}
            regions={regions}
            setRegions={setRegions}
            setPing={setPing}
            cplist={Object.keys(Locations)}
            cloudProvider={cloudProvider}
            setCloudProvider={setCloudProvider}
          />
          <WorldMap
            regions={regions}
            locations={LocationData[cloudProvider]}
            ping={ping}
          />
        </SecondWrapper>
        </MainWrapper>
    </>
  )
}



const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SecondWrapper = styled.div`
  display: flex;
`
export default App
