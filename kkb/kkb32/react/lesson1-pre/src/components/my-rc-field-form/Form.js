import useForm from './useForm'
import FieldContext from './FieldContext'

export default function Form({ children }) {
  const [formInstance] = useForm()
  // 跨层级传递数据仓库
  return <FieldContext.Provider value={formInstance}>
    {children}
  </FieldContext.Provider>
}
