import { Pagination, Stack } from '@mui/material';
import { PaginationBox } from 'components/paginationPage/PaginationBox';

const TablePagination = ({ perPage, onChange, list, page }) => {
  return (
    <>
      {!perPage || perPage === 1 || list.length <= 1 ? (
        <PaginationBox></PaginationBox>
      ) : (
        <PaginationBox>
          <div>
            <p>{`${page} page of ${perPage} pages`}</p>
          </div>
          <Stack spacing={2}>
            <Pagination
              // getItemAriaLabel={handelClick}
              onChange={onChange}
              count={perPage}
              shape="rounded"
            />
          </Stack>
        </PaginationBox>
      )}
    </>
  );
};

// ({
//     !perPage || perPage === 1 || usersList.length <= 1 ? (
//       <PaginationBox></PaginationBox>
//     ) : (
//       <PaginationBox>
//         <div>
//           <p>{`${page} page of ${perPage} pages`}</p>
//         </div>
//         <Stack spacing={2}>
//           <Pagination
//             // getItemAriaLabel={handelClick}
//             onChange={onChange}
//             count={perPage}
//             shape="rounded"
//           />
//         </Stack>
//       </PaginationBox>
//     )})

export default TablePagination;
