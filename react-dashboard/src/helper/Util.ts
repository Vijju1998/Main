const MONTHS = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
export const months  = (config:any) => {
    const cnfg = config || {};
    const count = cnfg.count || 12;
    const section = cnfg.section;
    const values = [];
    let value;


    for(let i = 0; i < count;i++){
        value = MONTHS[Math.ceil( i % 12)];
        values.push(value.substring(0,section))
    }
    return values;
}