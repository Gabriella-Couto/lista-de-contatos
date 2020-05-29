import React, { useState } from 'react';

class Contato{
    constructor(id, nome, fone, imagem, data, lat, long){
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.imagem = imagem;
        this.data = data;
        this.lat = lat;
        this.long = long
    }
}

export default Contato;