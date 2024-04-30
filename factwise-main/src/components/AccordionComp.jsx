import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Input,
  Textarea,
  Button
} from "@chakra-ui/react";

import React, { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { clickEdit, edit } from "../features/celebrities/celebritiesSlice";

const AccordionComp = () => {
  const dispatch = useDispatch();
  const celebrities = useSelector((state) => state.celebrities.celebrities);
  const [desc, setDesc] = useState("");

  const handleClick = (id) => {
    dispatch(clickEdit(id))
  }

  const handleChange = (e,id)=>{
    dispatch(edit({text:e.target.value,id}));
  }
  return (
    <Accordion allowToggle>
      {celebrities.map((celebrity) => (
        <AccordionItem key={celebrity.id}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {`${celebrity.first} ${celebrity.last}`}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box>
              <Box display="flex" alignItems="center">
                <Image borderRadius="full" src={celebrity.picture} alt="" />
                <Box marginLeft="20px">{`${celebrity.first} ${celebrity.last}`}</Box>
              </Box>
              <Textarea placeholder={celebrity.description} onChange={(e)=>handleChange(e,celebrity.id)}/>
            </Box>
            <Button onClick={()=>handleClick(celebrity.id)}>Edit</Button>
          </AccordionPanel>
          
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComp;
