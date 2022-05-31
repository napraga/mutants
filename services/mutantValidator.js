module.exports = (t) =>{
    let validator = {}
    validator.checkData = (rows, colums, array = []) => {
        let palabra1 = '';
        let palabra2 = '';
        const diagonalLeftRight = [];
        const diagonalRightLeft = [];
        let validarSecuencia = 0;
    
        for (let i = 0; i < rows; i++) {
          if (validarSecuencia !== 2) {
            if (rows !== array[i].length)
              throw new Error('Las filas y las columnas de su DNA deben ser las mismas NxN');
    
            for (let z = colums - 1, h = 0; z >= 0; z--, h++) {
              if (!validator.validate(array[i].charAt(h).toUpperCase()))
                throw new Error('el DNA solo debe contener A-C-T-G');
    
              if (!validator.validate(array[h].charAt(i).toUpperCase()))
                throw new Error('el DNA solo debe contener A-C-T-G');
    
              palabra1 += array[i].charAt(h).toUpperCase();
              palabra2 += array[h].charAt(i).toUpperCase();
    
              if (!diagonalRightLeft[i + h] || !diagonalLeftRight[i + h]) {
                if (!validator.validate(array[i].charAt(h).toUpperCase()))
                  throw new Error('el DNA solo debe contener A-C-T-G');
    
                if (!validator.validate(array[i].charAt(z).toUpperCase()))
                  throw new Error('el DNA solo debe contener A-C-T-G');
    
                diagonalLeftRight[i + h] = array[i].charAt(h).toUpperCase();
                diagonalRightLeft[i + h] = array[i].charAt(z).toUpperCase();
              } else {
                diagonalLeftRight[i + h] += array[i].charAt(h).toUpperCase();
                diagonalRightLeft[i + h] += array[i].charAt(z).toUpperCase();
              }
            }
    
            if (validator.contenidoValidador(palabra1) || validator.contenidoValidador(palabra2))
              validarSecuencia += 1;
          } else {
            return validarSecuencia;
          }
        }
    
        for (let w = 0; w < diagonalRightLeft.length; w++) {
          if (validarSecuencia === 2) return validarSecuencia;
    
          if (diagonalRightLeft[w].length > 3) {
            if (
              validator.contenidoValidador(diagonalRightLeft[w]) ||
              validator.contenidoValidador(diagonalLeftRight[w])
            ) {
              validarSecuencia += 1;
            }
          }
        }
    
        return validarSecuencia;
      };

    validator.validate = (Word) => {
        switch (Word) {
          case 'C':
          case 'A':
          case 'G':
          case 'T':
            return true;
          default:
            return false;
        }
      };

    validator.contenidoValidador = (Word) => {
        if (
          Word.includes('CCCC') ||
          Word.includes('TTTT') ||
          Word.includes('AAAA') ||
          Word.includes('GGGG')
        ) {
          return true;
        }
        return false;
      };


    validator.detectMutant = (dna=[]) => {
        if (!dna) throw new Error('Debe ingresar su DNA para validarlo');
        const rows = dna.length;
        const colums = dna[0].length;
        if (rows < 3 && colums < 3)
            throw new Error('Su DNA debe tener tres columnas o tres filas');
        if (rows === colums) {
            return validator.checkData(rows, colums, dna) > 1
        } else {
            throw new Error('Las filas y las columnas de su DNA deben ser las mismas NxN');
        }
      }

    return validator
}