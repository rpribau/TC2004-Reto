import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

import { MdCheckCircle, MdSettings } from 'react-icons/md'

  const Instructions = () => { 
    return (
        <List spacing={3} mt={4}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Date (object)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Amount (float64)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Is_holiday (int64)
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Sales (int64)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Weekday (int64)
                        </ListItem>
                        </List>
    );
}

export default Instructions;