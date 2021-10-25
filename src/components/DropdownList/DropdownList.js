import React, { useEffect, useState } from 'react';
import Flag from 'react-flagkit';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import data from '../../data/data.json';
import popular from '../../data/popular.json';
import { CountryInput, Label, List, ListItem } from './DropdownListStyles';
import { AnimatePresence } from 'framer-motion';
import { Container, Text } from '../../globalStyles';

const DropdownList = ({ closeDropdown, show, listRef }) => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (!show) {
			setSearch('');
		}
	}, [show]);

	const handleSearch = (searchText) => {
		setSearch(searchText);
	};

	const filterCountry = (el) => {
		const searchText = search.trim().toLocaleLowerCase();

		const name = el.name.toLocaleLowerCase().trim().includes(searchText);
		const code = el.cur.toLocaleLowerCase().trim().includes(searchText);

		return code || name;
	};

	return (
		<AnimatePresence>
			{show && (
				<List
					initial={{ opacity: 0, height: '0%' }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0 }}
				>
					<Container ref={listRef}>
						<ListItem padding="0" noHover>
							<IconContext.Provider value={{ size: '2em', color: '#c9c9c9' }}>
								<AiOutlineSearch></AiOutlineSearch>
							</IconContext.Provider>
							<CountryInput
								value={search}
								onChange={(e) => handleSearch(e.target.value)}
								placeholder="Type a currency"
								className="ml-5"
								bc="#fff"
								type="text"
							/>
						</ListItem>
						{search.length === 0 && (
							<>
								<ListItem noHover noPointer>
									<Label bold>Popular Currencies</Label>
								</ListItem>

								{popular.map((el, index) => (
									<ListItem key={index} onClick={() => closeDropdown(el)}>
										<Flag size={28} country={el.cur.slice(0, -1)} />{' '}
										<Text>{el.cur}</Text>
										<Label fontSize="1em">{el.name}</Label>
									</ListItem>
								))}

								<ListItem noHover noPointer>
									<Label bold>All Currencies</Label>
								</ListItem>
							</>
						)}

						{data
							.filter((el) => filterCountry(el))
							.map((el, index) => (
								<ListItem key={index} onClick={() => closeDropdown(el)}>
									<Flag size={28} country={el.cur.slice(0, -1)} />{' '}
									<Text>{el.cur}</Text>
									<Label fontSize="1em">{el.name}</Label>
								</ListItem>
							))}
					</Container>
				</List>
			)}
		</AnimatePresence>
	);
};

export default DropdownList;
