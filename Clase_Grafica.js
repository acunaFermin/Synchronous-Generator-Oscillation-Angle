class Grafica {
    constructor(n, H, dt, f, Do, Pm, Pe, y) {
        this.n = n;
        this.H = H;
        this.dt = dt;
        this.f = f;
        this.Do = Do;
        this.Pm = Pm;
        this.Pe = Pe;
        this.y = y;
        // *******************
        this.k = (180 * f * dt ** 2) / (H);
        this.Pao = (this.Pm - this.Pe * Math.sin((this.Do - this.y) * ((Math.PI) / 180))) / 2;
        this.Kpao = this.k * this.Pao;
        // *******************
        this.ADn_1 = [0]; // I 1
        this.Dn = [0];    // K 2
        this.D_yn = [0];  // J 3
        this.Pa = [0];    // F 4
        this.Kpa = [0];   // H 5
        this.t = [0];     // G 
        this.time = dt;
        this.result_i = [0];
        this.resultado = [0];
        this.result = [0];
        this.result[0] = [this.Pao, this.Kpao, 0, 0, this.Do];
        // *********************
        this.ejex = [0];
        this.ejey = [0];

    }
    #calculointerno(Pa_,Kpa_,ADn_1_,D_yn_,Dn_) {
        let ADn_1_i = (ADn_1_ + Kpa_);
        let Dn_i = (Dn_ + ADn_1_i);
        let D_yn_i = (Dn_i + this.y);
        let Pa_i = ((this.Pm - this.Pe * Math.sin((Dn_i - this.y) * ((Math.PI) / 180))) / 2);
        let Kpa_i = (Pa_i * this.k);
        return [Pa_i, Kpa_i, ADn_1_i, D_yn_i, Dn_i]
    }
    #Xtiempo() {        
        for (let i = 1; i < this.n; i++) {
            this.t[i] = this.time.toFixed(3);
            this.time = this.time + this.dt;
            let k = i - 1; // Consultar a Fermin
            this.result[i] = this.#calculointerno(this.result[k][0],this.result[k][1],this.result[k][2],this.result[k][3],this.result[k][4]);
        }
        this.ejex = this.t;
    }
    #Yvalor() {        
        for(let i=0; i<this.n; i++){
            this.resultado[i] = parseFloat(this.result[i][4].toFixed(5));   //aca esta elresultado final  
        }
        this.ejey = this.resultado;
    }
    Calcular(){
        this.#Xtiempo();
        this.#Yvalor();
    }
}




