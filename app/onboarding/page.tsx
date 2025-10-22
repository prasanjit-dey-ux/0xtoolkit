import React from 'react'
import { SelectedTrackingSources } from './selectedTrackingSources'
import { ConfirmYourCompetitors } from './confirmYourCompetitors'

export default function Onboarding(){
  return (
    <div className='bg-[#F7F7F7]'>
    <SelectedTrackingSources/>
    <ConfirmYourCompetitors />
    </div>
  )
}
