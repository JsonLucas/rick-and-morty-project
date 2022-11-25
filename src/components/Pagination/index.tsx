import { Box } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { PaginationRequestProps } from '../../interfaces/req-res-protocols';

export function Pagination({ numPages, setPage, setLoading, setData, requestFn }: PaginationRequestProps) {
	const handlePageClick = async ({ selected }: any) => {
		const page = selected+1;
		setPage(page);
		await requestFn({ page, setLoading, setData });
	}
	return (
		<Box pb='20px'>
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageClick}
				pageCount={numPages}
				previousLabel="<"
				renderOnZeroPageCount={() => { }}
				containerClassName='paginate-box'
				pageLinkClassName='paginate-link'
				previousLinkClassName='paginate-link'
				nextLinkClassName='paginate-link'
				activeLinkClassName='paginate-active-button'
			/>
		</Box>
	);
}