import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  margin: 5px;
`

export const StyledLoadElement = styled(motion.span)`
  display: block;
  width: 50px;
  height: 50px;
  border: 3px solid #8a8a8a;
  border-top: 3px solid #096bc8;
  border-right: 3px solid #096bc8;
  border-radius: 50%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
`

export const StyledLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  width: 100%;
  justify-content: center;
`
