import React from 'react'
import styled from 'styled-components'
import Jobs from './jobs'

const list = [
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 5, name: "33 N Dearborn", description: "Hose Valve RP", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 6, name: "Elite Manufacturing", description: "Head install", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 7, name: "Scholle 200", description: "FE DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: false},
    {id: 8, name: "Discover", description: "Jockey RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 9, name: "Cubs", description: "FE Map", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
    {id: 1, name: "Discover", description: "FDC Repair", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: false},
    {id: 2, name: "Scholle 200", description: "SP DF", WO: 19787, isMaterial: false, schedule: "5/12/2022", isComplete: true},
    {id: 3, name: "GSA", description: "SP DF", WO: 20301, isMaterial: false, schedule: "4/25/2022", isComplete: false},
    {id: 4, name: "Drake Towers", description: "Hose Valve RP", WO: 20666, isMaterial: true, schedule: "5/1/2022", isComplete: true},
  ]

  const colNames = ['Id', 'Job Name', 'description', 'WO Number', 'Material', 'Scheduling', 'Completed' ]

const home = () => {
    return (
        <>
            <Container>
                <Jobs list={list} colNames={colNames} />
            </Container>
        </>
    )
}

export default home


const Container = styled.div`
    overflow-x: hidden;
    min-height: calc(100vh - 70px);
    position: relative;
    background-color: #1a1c30;
    padding: 0 calc(3.5vw + 5px);
`