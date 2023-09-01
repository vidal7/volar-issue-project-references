import { writeFileSync } from 'fs';

['performant', 'non-performant'].forEach(name => {
    for(var i=1; i<=1000; i++) {
        writeFileSync(name + '/' + name + '-file' + i + '.ts', 'export const a: number = 0;');
        writeFileSync(name + '/' + name + '-file' + i + '.unit.ts', 'import { a } from "./' + name + '-file' + i + '";\n\nconsole.log(a);');
    }
});