import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Box, Typography, TextField, Tabs, Tab } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import './App.css';

const placeholderImg = 'https://ui-avatars.com/api/?name=';

const golfers = [
	{ golfer: 'Tiger Woods', score: -5, cut: true, hole: 18, photo: 'https://a.espncdn.com/i/headshots/golf/players/full/462.png', round: 3 },
	{ golfer: 'Rory McIlroy', score: -3, cut: true, hole: 17, photo: 'https://a.espncdn.com/i/headshots/golf/players/full/3470.png', round: 3 },
	{ golfer: 'Jordan Spieth', score: -2, cut: true, hole: 16, photo: 'https://a.espncdn.com/i/headshots/golf/players/full/5467.png', round: 2 },
	{ golfer: 'Phil Mickelson', score: 0, cut: false, hole: null, photo: 'https://a.espncdn.com/i/headshots/golf/players/full/308.png', round: 2 },
	{ golfer: 'Brooks Koepka', score: -1, cut: true, hole: 15, photo: `${placeholderImg}Brooks+Koepka`, round: 1 },
	{ golfer: 'Jon Rahm', score: -4, cut: true, hole: 18, photo: `${placeholderImg}Jon+Rahm`, round: 3 },
	{ golfer: 'Sam Ryder', score: 2, cut: false, hole: 10, photo: `${placeholderImg}Sam+Ryder`, round: 2 },
	{ golfer: 'Lucas Glover', score: 1, cut: true, hole: 12, photo: `${placeholderImg}Lucas+Glover`, round: 2 },
	{ golfer: 'Adam Scott', score: -1, cut: true, hole: 14, photo: `${placeholderImg}Adam+Scott`, round: 3 },
	{ golfer: 'Rickie Fowler', score: 0, cut: false, hole: 8, photo: `${placeholderImg}Rickie+Fowler`, round: 1 },
	{ golfer: 'Tony Finau', score: -2, cut: true, hole: 16, photo: `${placeholderImg}Tony+Finau`, round: 3 },
];

const golferNames = Array.from(new Set(golfers.map(g => g.golfer)));

const dummyEntries = [
	{
		name: 'Team Alpha',
		points: 120,
		score: -15,
		madeCut: 4,
		team: [golfers[0], golfers[1], golfers[2], golfers[3], golfers[4], golfers[5]],
	},
	{
		name: 'Team Bravo',
		points: 110,
		score: -12,
		madeCut: 3,
		team: [golfers[0], golfers[1], golfers[2], golfers[3], golfers[4], golfers[5]],
	},
	{
		name: 'Team Charlie',
		points: 105,
		score: -10,
		madeCut: 3,
		team: [golfers[0], golfers[1], golfers[2], golfers[3], golfers[4], golfers[5]],
	},
	{
		name: 'Team Delta',
		points: 95,
		score: -8,
		madeCut: 2,
		team: [golfers[0], golfers[6], golfers[7], golfers[8], golfers[9], golfers[10]], // Tiger + 5 new
	},
];

const columns = [
	{ name: 'Name', selector: row => row.name, sortable: true },
	{ name: 'Points', selector: row => row.points, sortable: true },
	{ name: 'Score', selector: row => row.score, sortable: true },
	{ name: 'Players Made Cut', selector: row => row.madeCut, sortable: true },
];

const ExpandedComponent = ({ data }) => (
	<Box sx={{ p: 2 }}>
		<table style={{ width: '100%', borderCollapse: 'collapse', background: '#f9f9f9' }}>
			<thead>
				<tr style={{ textAlign: 'left' }}>
					<th style={{ textAlign: 'left', padding: '4px 8px' }}>Photo</th>
					<th style={{ textAlign: 'left', padding: '4px 8px' }}>Golfer</th>
					<th style={{ textAlign: 'left', padding: '4px 8px' }}>Score</th>
					<th style={{ textAlign: 'left', padding: '4px 8px' }}>Made Cut</th>
					<th style={{ textAlign: 'left', padding: '4px 8px' }}>Hole</th>
					<th style={{ textAlign: 'left', padding: '4px 8px' }}>Round</th>
				</tr>
			</thead>
			<tbody>
				{data.team.map((g, idx) => (
					<tr key={idx}>
						<td style={{ padding: '4px 8px' }}>
							<img 
								src={g.photo} 
								alt={g.golfer} 
								style={{ width: 48, height: 36, objectFit: 'cover', borderRadius: 8, background: '#eee' }} 
							/>
						</td>
						<td style={{ padding: '4px 8px' }}>{g.golfer}</td>
						<td style={{ padding: '4px 8px' }}>{g.score}</td>
						<td style={{ padding: '4px 8px' }}>{g.cut ? '✅' : '❌'}</td>
						<td style={{ padding: '4px 8px' }}>{g.hole !== null ? g.hole : '-'}</td>
						<td style={{ padding: '4px 8px' }}>{g.round}</td>
					</tr>
				))}
			</tbody>
		</table>
	</Box>
);

const overallColumns = [
	{ name: 'Name', selector: row => row.name, sortable: true },
	{ name: 'Points', selector: row => row.points, sortable: true },
	{ name: 'Score', selector: row => row.score, sortable: true },
	{ name: 'Players Made Cut', selector: row => row.madeCut, sortable: true },
];

const tournamentColumns = [
	{ name: 'Golfer', selector: row => row.golfer, sortable: true },
	{ name: 'Score', selector: row => row.score, sortable: true },
	{ name: 'Made Cut', selector: row => row.cut ? '✅' : '❌', sortable: true },
	{ name: 'Hole', selector: row => row.hole !== null ? row.hole : '-', sortable: true },
];

function App() {
	const [filterText, setFilterText] = useState('');
	const [page, setPage] = useState(0);

	const filteredEntries = dummyEntries.filter(entry =>
		entry.name.toLowerCase().includes(filterText.toLowerCase()) ||
		entry.team.some(g => g.golfer.toLowerCase().includes(filterText.toLowerCase()))
	);

	return (
		<div style={{ background: '#f4f6f8', minHeight: '100vh' }}>
			<div style={{ background: '#1976d2', color: '#fff', padding: '1rem 2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Golf.png" alt="golf ball icon" style={{ width: 36, height: 36, marginRight: 12, background: '#fff', borderRadius: '50%', padding: 4 }} />
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Max's Golf Contest
        </Typography>
      </div>
			<div style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: '2rem' }}>
				<Box sx={{ overflowX: 'auto', mb: 2 }}>
          <Tabs
            value={page}
            onChange={(e, v) => setPage(v)}
            sx={{ minWidth: 400, width: 'max-content' }}
          >
            <Tab label="Leaderboard" />
            <Tab label="Overall Standings" />
            <Tab label="Tournament Standings" />
          </Tabs>
        </Box>
				{page === 0 && (
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: 2 }}>
						<Autocomplete
							freeSolo
							options={golferNames}
							inputValue={filterText}
							onInputChange={(event, newInputValue) => setFilterText(newInputValue)}
							sx={{ width: 220 }}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Search"
									variant="outlined"
									size="small"
								/>
							)}
						/>
					</Box>
				)}
				{page === 0 && (
					<DataTable
						columns={columns}
						data={filteredEntries}
						pagination
						expandableRows
						expandableRowsComponent={ExpandedComponent}
						highlightOnHover
						striped
						responsive
					/>
				)}
				{page === 1 && (
					<>
						<Typography variant="h5" sx={{ mb: 2, color: '#1976d2', fontWeight: 600 }}>Overall Standings</Typography>
						<DataTable
							columns={overallColumns}
							data={dummyEntries}
							pagination
							highlightOnHover
							striped
							responsive
						/>
					</>
				)}
				{page === 2 && (
					<>
						<Typography variant="h5" sx={{ mb: 2, color: '#1976d2', fontWeight: 600 }}>Tournament Standings</Typography>
						<DataTable
							columns={tournamentColumns}
							data={golfers}
							pagination
							highlightOnHover
							striped
							responsive
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
