import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Hidden } from '@material-ui/core'
import CreateCategoryForm from '../../components/admin-categories/CreateCategoryForm'
import CategoriesList from '../../components/admin-categories/CategoriesList'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../../redux/actions/categories'
import { RootState } from '../../redux/store'
import UpdateCategoryForm from '../../components/admin-categories/UpdateCategoryForm'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'

const Categories = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { categoryToUpdate } = useSelector((state: RootState) => state.category)

  useEffect(() => {
    dispatch(categories())
  }, [])

  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      {/* content div */}
      <div className={classes.contentDiv}>
        <Hidden smUp>
          <AdminMobileSidenav />
        </Hidden>

        <Typography align='center' variant='h5' className={classes.mainHeader}>
          Categories
        </Typography>

        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography align='center' variant='h6'>
              {categoryToUpdate ? 'Update Category' : 'Create Category'}
            </Typography>

            {categoryToUpdate ? <UpdateCategoryForm /> : <CreateCategoryForm />}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography align='center' variant='h6'>
              Categories List
            </Typography>

            <CategoriesList />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Categories
