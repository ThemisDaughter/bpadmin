import React from 'react'
import { StyledOverviewGrid, StyledGridField } from 'styles/styledAdminComponents'
import StyledStack from 'styles/styledSharedComponents/styledStack'

const BusinessField = () => {

  
  
  return (
  <StyledOverviewGrid className='full-w'>
    <StyledGridField xstart={1} xend={4} ystart={1} yend={2}>
      <h3>Business Name</h3>
    </StyledGridField>
    <StyledGridField xstart={1} xend={4} ystart={2} yend={3}>
      some more info
      and
      even
      more
      info
      with
      hopefully
      new
      lines
      inbetween
      some more info
      and
      even
      more
      info
      with
      hopefully
      new
      lines
      inbetween
      some more info
      and
      even
      more
      info
      with
      hopefully
      new
      lines
      inbetween
      some more info
      and
      even
      more
      info
      with
      hopefully
      new
      lines
      inbetween
      some more info
      and
      even
      more
      info
      with
      hopefully
      new
      lines
      inbetween
    </StyledGridField>
    <StyledGridField xstart={1} xend={4} ystart={3} yend={4}>
      Liste
      Liste
      Liste
      Liste
    </StyledGridField>
    <StyledGridField xstart={4} xend={5} ystart={2} yend={4}>
      <StyledStack direction='column'>
        <p>bearbeiten</p>
        <p>Kampagne hinzufügen</p>
      </StyledStack>

    </StyledGridField>

  </StyledOverviewGrid>
)}

export default BusinessField