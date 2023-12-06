import { useDemoData } from "@mui/x-data-grid-generator";
import LinearProgress from "@mui/material/LinearProgress";
import { DataGrid } from "@mui/x-data-grid/DataGrid";

const Analytics = () => {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10000,
        editable: true,
        maxColumns: 15
    })
    return (
        <>
            <h1 >Analyticcs</h1>
            <p>
                The bestest Data available here at your finger tips in tabular form.
                This could be a whole section of data that is available for users to deep dive further into the numbers/stats
            </p>
            <div style={{ height: '600px', width: '100%' }}>
                <DataGrid
                    slots={{
                        loadingOverlay: LinearProgress,
                    }}
                    loading={!data}
                    {...data}
                />
            </div>
        </>
    )
}

export default Analytics;