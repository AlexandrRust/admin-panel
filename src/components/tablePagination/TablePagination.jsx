import { Pagination, Stack } from '@mui/material';
import { PaginationBox } from 'components/paginationPage/PaginationBox';

const TablePagination = ({ allPage, onChange, list, page }) => {
  return (
    <>
      {!allPage || allPage === 1 || list.length < 1 ? (
        <PaginationBox></PaginationBox>
      ) : (
        <PaginationBox>
          <div>
            <p>{`${page} page of ${allPage} pages`}</p>
          </div>
          <Stack spacing={2}>
            <Pagination
              // getItemAriaLabel={handelClick}
              onChange={onChange}
              count={allPage}
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
