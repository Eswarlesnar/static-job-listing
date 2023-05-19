import React, {createContext , useState , useEffect} from 'react'
import initialData from "../data.json"
import { Dispatch , SetStateAction } from 'react'


interface Props {
    children  : React.ReactNode
}  

export interface JobType {
    "id" : number , 
    "company" : string , 
    "logo" : string, 
    "new": boolean,
    "featured": boolean,
    "position": string,
    "role": string,
    "level": string,
    "postedAt": string,
    "contract": string,
    "location": string,
    "languages": string[],
    "tools": string[]
}

export interface JobContextType  {
    data : JobType[], 
    filters : string[],
    setFilters : Dispatch<SetStateAction<string[]>>
}

export const jobContext = createContext<JobContextType | null>(null)

export const JobContextProvider : React.FC<Props> = ({children}) => {
    const [data  ,setData ] = useState<JobType[]>(initialData)
    const [filters , setFilters] = useState<string[]>([])
    useEffect(()=> {
            ///update the data state according to filterss
            let tempData = [...initialData]
            filters.forEach((item:string) => {
               tempData =  tempData.filter((job : JobType) => {
                  if(JSON.stringify(job).includes(item)){
                    return true
                  }else{
                    return false
                  }
               })
            })
            setData(tempData)
    },[filters])

    return <jobContext.Provider value = {{data , filters , setFilters}}>
          {children}
        </jobContext.Provider>
}
