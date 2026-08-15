////////////////////////////////////////////////////////////////////////
// File       : sudokusolver.js
// Language   : Java Script
// Description: Sudoku Solver
// Author     : Sandesh Prabhakar
// Created    : November 5, 2025
// Modified   : August 15, 2026
// Version    : 1.0
//
// Copyright (c) 2026 Sandesh Prabhakar
// All rights reserved
////////////////////////////////////////////////////////////////////////

function SudokuSolver()
                 {

                    ResetGrid_OUT();
                    //Create references to the input elements we wish to validate
                    var element = [];
                    var o_element = [];

                    for (var i=1;i<10;i++) {
                       element[i] = [];                    
                       o_element[i] = [];
                    }

                    element[1][1] = document.getElementById("element11").value;
                    element[1][2] = document.getElementById("element12").value;
                    element[1][3] = document.getElementById("element13").value;
                    element[1][4] = document.getElementById("element14").value;
                    element[1][5] = document.getElementById("element15").value;
                    element[1][6] = document.getElementById("element16").value;
                    element[1][7] = document.getElementById("element17").value;
                    element[1][8] = document.getElementById("element18").value;
                    element[1][9] = document.getElementById("element19").value;

                    element[2][1] = document.getElementById("element21").value;
                    element[2][2] = document.getElementById("element22").value;
                    element[2][3] = document.getElementById("element23").value;
                    element[2][4] = document.getElementById("element24").value;
                    element[2][5] = document.getElementById("element25").value;
                    element[2][6] = document.getElementById("element26").value;
                    element[2][7] = document.getElementById("element27").value;
                    element[2][8] = document.getElementById("element28").value;
                    element[2][9] = document.getElementById("element29").value;

                    element[3][1] = document.getElementById("element31").value;
                    element[3][2] = document.getElementById("element32").value;
                    element[3][3] = document.getElementById("element33").value;
                    element[3][4] = document.getElementById("element34").value;
                    element[3][5] = document.getElementById("element35").value;
                    element[3][6] = document.getElementById("element36").value;
                    element[3][7] = document.getElementById("element37").value;
                    element[3][8] = document.getElementById("element38").value;
                    element[3][9] = document.getElementById("element39").value;

                    element[4][1] = document.getElementById("element41").value;
                    element[4][2] = document.getElementById("element42").value;
                    element[4][3] = document.getElementById("element43").value;
                    element[4][4] = document.getElementById("element44").value;
                    element[4][5] = document.getElementById("element45").value;
                    element[4][6] = document.getElementById("element46").value;
                    element[4][7] = document.getElementById("element47").value;
                    element[4][8] = document.getElementById("element48").value;
                    element[4][9] = document.getElementById("element49").value;

                    element[5][1] = document.getElementById("element51").value;
                    element[5][2] = document.getElementById("element52").value;
                    element[5][3] = document.getElementById("element53").value;
                    element[5][4] = document.getElementById("element54").value;
                    element[5][5] = document.getElementById("element55").value;
                    element[5][6] = document.getElementById("element56").value;
                    element[5][7] = document.getElementById("element57").value;
                    element[5][8] = document.getElementById("element58").value;
                    element[5][9] = document.getElementById("element59").value;

                    element[6][1] = document.getElementById("element61").value;
                    element[6][2] = document.getElementById("element62").value;
                    element[6][3] = document.getElementById("element63").value;
                    element[6][4] = document.getElementById("element64").value;
                    element[6][5] = document.getElementById("element65").value;
                    element[6][6] = document.getElementById("element66").value;
                    element[6][7] = document.getElementById("element67").value;
                    element[6][8] = document.getElementById("element68").value;
                    element[6][9] = document.getElementById("element69").value;

                    element[7][1] = document.getElementById("element71").value;
                    element[7][2] = document.getElementById("element72").value;
                    element[7][3] = document.getElementById("element73").value;
                    element[7][4] = document.getElementById("element74").value;
                    element[7][5] = document.getElementById("element75").value;
                    element[7][6] = document.getElementById("element76").value;
                    element[7][7] = document.getElementById("element77").value;
                    element[7][8] = document.getElementById("element78").value;
                    element[7][9] = document.getElementById("element79").value;

                    element[8][1] = document.getElementById("element81").value;
                    element[8][2] = document.getElementById("element82").value;
                    element[8][3] = document.getElementById("element83").value;
                    element[8][4] = document.getElementById("element84").value;
                    element[8][5] = document.getElementById("element85").value;
                    element[8][6] = document.getElementById("element86").value;
                    element[8][7] = document.getElementById("element87").value;
                    element[8][8] = document.getElementById("element88").value;
                    element[8][9] = document.getElementById("element89").value;

                    element[9][1] = document.getElementById("element91").value;
                    element[9][2] = document.getElementById("element92").value;
                    element[9][3] = document.getElementById("element93").value;
                    element[9][4] = document.getElementById("element94").value;
                    element[9][5] = document.getElementById("element95").value;
                    element[9][6] = document.getElementById("element96").value;
                    element[9][7] = document.getElementById("element97").value;
                    element[9][8] = document.getElementById("element98").value;
                    element[9][9] = document.getElementById("element99").value;
                    

var error_flag=0;

    for (var r=1; r<10; r++) {
      for(var cl=1;cl<10;cl++) {
                if(element[r][cl] == "") {
                   element[r][cl] == "0";
                }
                console.log(Number(element[r][cl]));
                if(Number(element[r][cl]) > 9 || Number(element[r][cl]) < 0) {
			error_flag=1;
                }
      }
    }


if(error_flag==1) {
alert("ERROR IN INPUT - Inputs should be between 0 and 10 \n");
return;
}
                    //Create references to the input elements we wish to validate
                    var table = [];
                    var table_copy = [];
                    var MAT = [];

                    for (var i=0;i<10;i++) {
                       table[i] = [];                    
                       table_copy[i] = [];
                       MAT[i] = [];
                    }

                    for (var i=0;i<10;i++) {
                       for (var j=0;j<10;j++) {
                       table[i][j] = [];                    
                       table_copy[i][j] = [];
                       }
                    }

                    for (var i=0;i<10;i++) {
                       for (var j=0;j<10;j++) {
                           for (var k=0;k<10;k++) {
                       		table[i][j][k] = [];                    
                       		table_copy[i][j][k] = [];
                       	   }
                       }
                    }


          //Initializing the scheduling list
	 for (var i=0; i<10;i++) {
            for (var j=0; j<10; j++) {
               for (var k=0; k<10; k++) {
                    {
                    	for (var l=0; l<10;l++) {
		    			table[i][j][k][l] = 0;
		    			table_copy[i][j][k][l] = 0;
                    		}
                    }
               }
            }
          }

	for (var i=0; i<10; i++) {
		for (j=0; j<10; j++) {
		    		MAT[i][j] = 0;
			}
	}



var rx=0;
var cx=0;
var bx=1;
var temp;
    for (var r=1; r<10; r++) {
      rx++;
      for(var cl=1;cl<10;cl++) {
                cx++;
                temp=Number(element[r][cl]);
                console.log(temp);
                if(temp==0) {
                table[bx][r][cl][0]=9;
                   for(var i=1;i<10;i++) {
                     table[bx][r][cl][i]=i;
                     }
                }
                else {
                     table[bx][r][cl][0]=1;
                     table[bx][r][cl][1]=temp;
                }
             
              if(cx==3) {
                bx++;
                cx=0;
                }

         }

     if(rx==3) {
       rx=0;
       }
     else {
       bx=bx-3;
       }
    }



    		    console.log("Successfully read in Sudoku:\n");
                    console.log("\tPrinting input Sudoku\n");
                    print_sudoku(table);

                    var global_change_flag = [];
		    global_change_flag[0]=1;
		    
var unsolved_count=0;

error_flag=verify_sudoku(table);
if(error_flag==1) {
alert("ERROR IN INPUT - No repititions allowed in each column, row and 3x3 block \n");
return;
}

if(error_flag==0) {
sudoku_solver_basic(table,global_change_flag);
}

error_flag=verify_sudoku(table);

if(error_flag==1) {
alert("ERROR IN INPUT \n");
return;
}

unsolved_count=calculate_sudoku_unsolved_count(table);

copy_table(table,table_copy);

if(unsolved_count==81 && error_flag==0)
    {
    alert("Successfully Solved the Basic Sudoku\n");
    console.log("Successfully processed Sudoku:\n");
    console.log("\tPrinting output Sudoku\n");
    }

if(unsolved_count>81 && error_flag==0)
   {
    sudoku_solver_advanced(table,table_copy,global_change_flag);

    unsolved_count=calculate_sudoku_unsolved_count(table_copy);

    error_flag=verify_sudoku(table_copy);
    if(error_flag==1) {
       alert("INSUFFICIENT DATA TO COMPUTE CORRECTLY - No output generated\n");
       return; 
    }

    if(unsolved_count==81)
      {
       alert("Successfully Solved the Advanced Sudoku\n");
       console.log("Successfully processed Scary Sudoku:\n");
       console.log("\tPrinting output Sudoku\n");
      }
     else
      {
       alert("INSUFFICIENT DATA TO COMPUTE FULLY - Incomplete Output Generated\n");
       console.log("\tPrinting output Sudoku\n");
       console.log("\tPrinting output Sudoku based on unsolved count\n");
       console.log("\tPrinting output Sudoku based on unsolved choices\n");
      }

   }

if(error_flag==0) {
rx=0;
cx=0;
bx=1;

    for (var r=1; r<10; r++) {
      rx++;
      for(var cl=1;cl<10;cl++) {
                cx++;

                if(table_copy[bx][r][cl][0]>1)
                {
                o_element[r][cl]="";
                }
                else
                {
                 for(var z=1;z<10;z++)
                 {
                  if(table_copy[bx][r][cl][z]>0) 
                  o_element[r][cl]=table[bx][r][cl][z];
                 }
                }

              if(cx==3) {
                bx++;
                cx=0;
                }

         }

     if(rx==3) {
       rx=0;
       }
     else {
       bx=bx-3;
       }
    }
}

                    document.getElementById("o_element11").value = o_element[1][1];
                    document.getElementById("o_element12").value = o_element[1][2];
                    document.getElementById("o_element13").value = o_element[1][3];
                    document.getElementById("o_element14").value = o_element[1][4];
                    document.getElementById("o_element15").value = o_element[1][5];
                    document.getElementById("o_element16").value = o_element[1][6];
                    document.getElementById("o_element17").value = o_element[1][7];
                    document.getElementById("o_element18").value = o_element[1][8];
                    document.getElementById("o_element19").value = o_element[1][9];

                    document.getElementById("o_element21").value = o_element[2][1];
                    document.getElementById("o_element22").value = o_element[2][2];
                    document.getElementById("o_element23").value = o_element[2][3];
                    document.getElementById("o_element24").value = o_element[2][4];
                    document.getElementById("o_element25").value = o_element[2][5];
                    document.getElementById("o_element26").value = o_element[2][6];
                    document.getElementById("o_element27").value = o_element[2][7];
                    document.getElementById("o_element28").value = o_element[2][8];
                    document.getElementById("o_element29").value = o_element[2][9];

                    document.getElementById("o_element31").value = o_element[3][1];
                    document.getElementById("o_element32").value = o_element[3][2];
                    document.getElementById("o_element33").value = o_element[3][3];
                    document.getElementById("o_element34").value = o_element[3][4];
                    document.getElementById("o_element35").value = o_element[3][5];
                    document.getElementById("o_element36").value = o_element[3][6];
                    document.getElementById("o_element37").value = o_element[3][7];
                    document.getElementById("o_element38").value = o_element[3][8];
                    document.getElementById("o_element39").value = o_element[3][9];

                    document.getElementById("o_element41").value = o_element[4][1];
                    document.getElementById("o_element42").value = o_element[4][2];
                    document.getElementById("o_element43").value = o_element[4][3];
                    document.getElementById("o_element44").value = o_element[4][4];
                    document.getElementById("o_element45").value = o_element[4][5];
                    document.getElementById("o_element46").value = o_element[4][6];
                    document.getElementById("o_element47").value = o_element[4][7];
                    document.getElementById("o_element48").value = o_element[4][8];
                    document.getElementById("o_element49").value = o_element[4][9];

                    document.getElementById("o_element51").value = o_element[5][1];
                    document.getElementById("o_element52").value = o_element[5][2];
                    document.getElementById("o_element53").value = o_element[5][3];
                    document.getElementById("o_element54").value = o_element[5][4];
                    document.getElementById("o_element55").value = o_element[5][5];
                    document.getElementById("o_element56").value = o_element[5][6];
                    document.getElementById("o_element57").value = o_element[5][7];
                    document.getElementById("o_element58").value = o_element[5][8];
                    document.getElementById("o_element59").value = o_element[5][9];

                    document.getElementById("o_element61").value = o_element[6][1];
                    document.getElementById("o_element62").value = o_element[6][2];
                    document.getElementById("o_element63").value = o_element[6][3];
                    document.getElementById("o_element64").value = o_element[6][4];
                    document.getElementById("o_element65").value = o_element[6][5];
                    document.getElementById("o_element66").value = o_element[6][6];
                    document.getElementById("o_element67").value = o_element[6][7];
                    document.getElementById("o_element68").value = o_element[6][8];
                    document.getElementById("o_element69").value = o_element[6][9];

                    document.getElementById("o_element71").value = o_element[7][1];
                    document.getElementById("o_element72").value = o_element[7][2];
                    document.getElementById("o_element73").value = o_element[7][3];
                    document.getElementById("o_element74").value = o_element[7][4];
                    document.getElementById("o_element75").value = o_element[7][5];
                    document.getElementById("o_element76").value = o_element[7][6];
                    document.getElementById("o_element77").value = o_element[7][7];
                    document.getElementById("o_element78").value = o_element[7][8];
                    document.getElementById("o_element79").value = o_element[7][9];

                    document.getElementById("o_element81").value = o_element[8][1];
                    document.getElementById("o_element82").value = o_element[8][2];
                    document.getElementById("o_element83").value = o_element[8][3];
                    document.getElementById("o_element84").value = o_element[8][4];
                    document.getElementById("o_element85").value = o_element[8][5];
                    document.getElementById("o_element86").value = o_element[8][6];
                    document.getElementById("o_element87").value = o_element[8][7];
                    document.getElementById("o_element88").value = o_element[8][8];
                    document.getElementById("o_element89").value = o_element[8][9];

                    document.getElementById("o_element91").value = o_element[9][1];
                    document.getElementById("o_element92").value = o_element[9][2];
                    document.getElementById("o_element93").value = o_element[9][3];
                    document.getElementById("o_element94").value = o_element[9][4];
                    document.getElementById("o_element95").value = o_element[9][5];
                    document.getElementById("o_element96").value = o_element[9][6];
                    document.getElementById("o_element97").value = o_element[9][7];
                    document.getElementById("o_element98").value = o_element[9][8];
                    document.getElementById("o_element99").value = o_element[9][9];

                 }


function print_sudoku(table)
{
    var rx=0;
    var cx=0;
    var bx=1;
    var r,cl,z;
    for (var r=1; r<10; r++)
    {
      rx++;
      for(var cl=1;cl<10;cl++)
        {
                cx++;
                if(table[bx][r][cl][0]>1)
                {
                console.log("0 ");
                }
                else
                {
                 for(var z=1;z<10;z++)
                 {
                  if(table[bx][r][cl][z]>0) 
                  console.log(table[bx][r][cl][z]);
                 }
                }

             
              if(cx==3)
                {
                bx++;
                cx=0;
                }
         }

     if(rx==3)
       {
       rx=0;
       }
     else
       {
       bx=bx-3;
       }
     console.log("\n");
    }
}

function verify_sudoku (table)
{
var rx=0;
var cx=0;
var bx=1;
var r,cl,z;

var temp_MAT = [];
var temp_MAT_BL = [];
var bx_index = [];

var i,j;

for (i=0;i<10;i++) {
   temp_MAT[i] = [];                    
   temp_MAT_BL[i] = [];
}

var error_flag=0;

     for(i=0;i<10;i++)
      {
       bx_index[i]=0;
       for(j=0;j<10;j++)
         {
          temp_MAT[i][j]=0;
          temp_MAT_BL[i][j]=0;
         }
      }

    for (r=1; r<10; r++)
    {
      rx++;
      for(cl=1;cl<10;cl++)
        {
                cx++;
                if(table[bx][r][cl][0]==1)
                {
                 for(var z=1;z<10;z++)
                 {
                  if(table[bx][r][cl][z]>0) 
                  {
                  temp_MAT[r][cl]=table[bx][r][cl][z];
                  bx_index[bx]=bx_index[bx]+1;
                  temp_MAT_BL[bx][bx_index[bx]]=table[bx][r][cl][z];
                  }
                 }
                }

             
              if(cx==3)
                {
                bx++;
                cx=0;
                }
         }

     if(rx==3)
       {
       rx=0;
       }
     else
       {
       bx=bx-3;
       }
    }


         for(r=1; r<10; r++)
          {
           for(var cr=1;cr<9;cr++)
              {
               for(var crx=cr+1;crx<10;crx++)
                  {
                   if(temp_MAT[r][cr]==temp_MAT[r][crx])
                    {
                     if(temp_MAT[r][cr]!=0)
                     {
                     error_flag=1;
                     break;
                     }
                    }
                  }
               if(error_flag==1)
               break;
              }
               if(error_flag==1)
               break;
         }

    if(error_flag==0)
     {
        for(cl=1; cl<10; cl++)
          {
           for(var cr=1;cr<9;cr++)
              {
               for(var crx=cr+1;crx<10;crx++)
                  {
                   if(temp_MAT[cr][cl]==temp_MAT[crx][cl])
                    {
                     if(temp_MAT[cr][cl]!=0)
                     {
                     error_flag=1;
                     break;
                     }
                    }
                  }
               if(error_flag==1)
               break;
              }
         if(error_flag==1)
         break;
         }
     }


    if(error_flag==0)
     {
        for(bx=1; bx<10; bx++)
          {
           for(var cr=1;cr<9;cr++)
              {
               for(var crx=cr+1;crx<10;crx++)
                  {
                   if(temp_MAT_BL[bx][cr]==temp_MAT_BL[bx][crx])
                    {
                     if(temp_MAT_BL[bx][cr]!=0)
                     {
                     error_flag=1;
                     break;
                     }
                    }
                  }
               if(error_flag==1)
               break;
              }
         if(error_flag==1)
         break;
         }
     }

return error_flag;

}

function sudoku_solver_basic(table, global_change_flag)
 {

var temp_flag;
var loop_count=0;

   while(global_change_flag[0])
   {

       global_change_flag[0]=parse_and_optimize(table);

       temp_flag=row_column_block_compare_and_optimize(table);
       if(temp_flag==1 && global_change_flag[0]==0)
        {
         global_change_flag[0]=1;
        }

       temp_flag=row_column_block_naked_subset_and_optimize(table);
       if(temp_flag==1 && global_change_flag[0]==0)
        {
         global_change_flag[0]=1;
        }
       loop_count++;
   }

}


function parse_and_optimize (table)
{
var loop_count=0;
var change_flag=1;
var global_change_flag=0;
while(change_flag)
  {

var rx=0;
var cx=0;
var bx=1;
var tempx,i,j,r,cl,z,b;
   change_flag=0; 
    for (r=1; r<10; r++)
    {
      rx++;
      for(cl=1;cl<10;cl++)
        {
                cx++;
                if(table[bx][r][cl][0]==1)
                {
                 for(z=1;z<10;z++)
                 {
                  if(table[bx][r][cl][z]>0) 
                  tempx=table[bx][r][cl][z];
                 }

                  for(i=1;i<10;i++)
                   {
                      for(b=1;b<10;b++)
                      {
                        if(table[b][r][i][0]>1)
                         {
                          if(table[b][r][i][tempx]!=0)
                           {
                            table[b][r][i][tempx]=0;
                            table[b][r][i][0]=table[b][r][i][0]-1;
                            change_flag=1;
                            global_change_flag=1;
                           }
                         }
                      }
                   }

                  for(i=1;i<10;i++)
                   {
                      for(b=1;b<10;b++)
                      {
                        if(table[b][i][cl][0]>1)
                         {
                          if(table[b][i][cl][tempx]!=0)
                           {
                            table[b][i][cl][tempx]=0;
                            table[b][i][cl][0]=table[b][i][cl][0]-1;
                            change_flag=1;
                            global_change_flag=1;
                           }
                         }
                      }
                   }

                  
                  for(i=1;i<10;i++)
                   {
                   for(j=1;j<10;j++)
                    {
                    if(table[bx][i][j][0]>1)
                     {
                       if(table[bx][i][j][tempx]!=0)
                        {
                        table[bx][i][j][tempx]=0;
                        table[bx][i][j][0]=table[bx][i][j][0]-1;
                        change_flag=1;
                        global_change_flag=1;
                        }
                     }
                    }
                   }

                }

             
              if(cx==3)
                {
                bx++;
                cx=0;
                }
         }

     if(rx==3)
       {
       rx=0;
       }
     else
       {
       bx=bx-3;
       }
    }
loop_count++;
}

return global_change_flag;
}

function row_column_block_compare_and_optimize (table)
{
var loop_count=0;
var change_flag=1;
var global_change_flag=0;

while(change_flag)
  {

var rx=0;
var cx=0;
var bx=1;
var tempx,tempx2,r,cl,z,i,j,jj,m,b;
var clear_flag=1;
   change_flag=0; 
    for (r=1; r<10; r++)
    {
      rx++;
      for(cl=1;cl<10;cl++)
        {
            cx++;
            if(table[bx][r][cl][0]>1)
             {
                 for( z=1;z<10;z++)
                 {
                     if(table[bx][r][cl][z]>0) 
                      {
                      clear_flag=0;

                       tempx=table[bx][r][cl][z];
                                 for(i=1;i<10;i++)
                                   {
                                    if(i!=cl)
                                      {
                                        for(b=1;b<10;b++)
                                         {
                                             if(table[b][r][i][0]>0)
                                               {
                                                 for(j=1;j<10;j++)
                                                   {
                                                   tempx2 = table[b][r][i][j];
                                                       if(tempx2==tempx)
                                                         {
                                                         clear_flag=1;
                                                         break;
                                                         }
                                                   }
                                               }
                                           if(clear_flag==1)
                                           break;
                                         }
                                      }
                                   if(clear_flag==1)
                                   break;
                                   }

                               if(clear_flag==1)
                                 {
                                 clear_flag=0;
                                 for(i=1;i<10;i++)
                                   {
                                    if(i!=r)
                                      {
                                        for(b=1;b<10;b++)
                                         {
                                             if(table[b][i][cl][0]>0)
                                               {
                                                 for(j=1;j<10;j++)
                                                   {
                                                   tempx2 = table[b][i][cl][j];
                                                       if(tempx2==tempx)
                                                         {
                                                         clear_flag=1;
                                                         break;
                                                         }
                                                   }
                                               }
                                           if(clear_flag==1)
                                           break;
                                         }
                                      }
                                   if(clear_flag==1)
                                   break;
                                   }
                                  }


                               if(clear_flag==1)
                                 {
                                 clear_flag=0;
                                   for(i=1;i<10;i++)
                                     {
                                       for(j=1;j<10;j++)
                                            {
                                             if((i!=r) || (j!=cl))
                                               {
                                                if(table[bx][i][j][0]>0)
                                                   {
                                                    for(jj=1;jj<10;jj++)
                                                        {
                                                          tempx2=table[bx][i][j][jj];
                                                          if(tempx2==tempx)
                                                            {
                                                             clear_flag=1;
                                                             break;
                                                            }
                                                        }
                                                    }
                                                }
                                              if(clear_flag==1)
                                              break;
                                             }
                                      if(clear_flag==1)
                                      break;
                                     }
                                  }

                      }
                        if(clear_flag==0)
                         {
                           for(m=1;m<10;m++)
                             {
                              if(m==tempx)
                               {
                                table[bx][r][cl][m]=m;
                                table[bx][r][cl][0]=1;
                               }
                               else
                               {
                               table[bx][r][cl][m]=0;
                               }
                             }
                         change_flag=1;
                         global_change_flag=1;
                         clear_flag=1;
                         break;
                         }
                }

 
                }

             
              if(cx==3)
                {
                bx++;
                cx=0;
                }
         }

     if(rx==3)
       {
       rx=0;
       }
     else
       {
       bx=bx-3;
       }
    }
loop_count++;
}
return global_change_flag;
}


function row_column_block_naked_subset_and_optimize (table)
{
var loop_count=0;
var change_flag=1;
var global_change_flag=0;

while(change_flag)
  {

var rx=0;
var cx=0;
var bx=1;
var tempx,tempx2,r,cl,z,i,j,jj,m,b;
var clear_flag=1;
var crb,crb1,crb2;
var store = [];
store[0]=0;
store[1]=0;
store[2]=0;

   change_flag=0; 
    for (r=1; r<10; r++)
    {
      rx++;
      for(cl=1;cl<10;cl++)
        {
            cx++;
            if(table[bx][r][cl][0]==2)
             {
                 store[0]=0;
                 store[1]=0;
                 store[2]=0; 
                    for( z=1;z<10;z++)
                    {
                     if(table[bx][r][cl][z]>0) 
                      {
                      store[0]++;
                      var xyz=store[0];
                      store[xyz]=table[bx][r][cl][z];
                      }
                     }

//ROW fixed
                      clear_flag=0;

                                 for(i=1;i<10;i++)
                                   {
                                    if(i>cl)
                                      {
                                        for(b=1;b<10;b++)
                                         {
                                          clear_flag=0;
                                             if(table[b][r][i][0]==2)
                                               {
                                                 for(j=1;j<10;j++)
                                                   {
                                                   tempx2 = table[b][r][i][j];
                                                       if(tempx2==store[1])
                                                         {
                                                         clear_flag++;
                                                         }
                                                       if(tempx2==store[2])
                                                         {
                                                         clear_flag++;
                                                         }
                                                    crb=i;
                                                   }
                                               }
                                           if(clear_flag==2)
                                           break;
                                         }
                                      }
                                   if(clear_flag==2)
                                   break;
                                   }

                               if(clear_flag==2)
                                 {
                                 clear_flag=0;
                                 for(i=1;i<10;i++)
                                   {
                                    if((i!=cl)&&(i!=crb))
                                      {
                                        for(b=1;b<10;b++)
                                         {
                                             if(table[b][r][i][0]>0)
                                               {
                                                 for(j=1;j<10;j++)
                                                   {
                                                   tempx2 = table[b][r][i][j];
                                                       if(tempx2==store[1])
                                                         {
                                                         table[b][r][i][j]=0;
                                                         table[b][r][i][0]=table[b][r][i][0]-1;
                                                         change_flag=1;
                                                         global_change_flag=1;
                                                         }
                                                       if(tempx2==store[2])
                                                         {
                                                         table[b][r][i][j]=0;
                                                         table[b][r][i][0]=table[b][r][i][0]-1;
                                                         change_flag=1;
                                                         global_change_flag=1;
                                                         }
                                                   }
                                               }
                                         }
                                      }
                                   }
                                  }


////Column fixed
                      clear_flag=0;

                                 for(i=1;i<10;i++)
                                   {
                                    if(i>r)
                                      {
                                        for(b=1;b<10;b++)
                                         {
                                            clear_flag=0;
                                             if(table[b][i][cl][0]==2)
                                               {
                                                 for(j=1;j<10;j++)
                                                   {
                                                   tempx2 = table[b][i][cl][j];
                                                       if(tempx2==store[1])
                                                         {
                                                         clear_flag++;
                                                         }
                                                       if(tempx2==store[2])
                                                         {
                                                         clear_flag++;
                                                         }
                                                    crb=i;
                                                   }
                                               }
                                           if(clear_flag==2)
                                           break;
                                         }
                                      }
                                   if(clear_flag==2)
                                   break;
                                   }

                               if(clear_flag==2)
                                 {
                                 clear_flag=0;
                                 for(i=1;i<10;i++)
                                   {
                                    if((i!=r)&&(i!=crb))
                                      {
                                        for(b=1;b<10;b++)
                                         {
                                             if(table[b][i][cl][0]>0)
                                               {
                                                 for(j=1;j<10;j++)
                                                   {
                                                   tempx2 = table[b][i][cl][j];
                                                       if(tempx2==store[1])
                                                         {
                                                         table[b][i][cl][j]=0;
                                                         table[b][i][cl][0]=table[b][i][cl][0]-1;
                                                         change_flag=1;
                                                         global_change_flag=1;
                                                         }
                                                       if(tempx2==store[2])
                                                         {
                                                         table[b][i][cl][j]=0;
                                                         table[b][i][cl][0]=table[b][i][cl][0]-1;
                                                         change_flag=1;
                                                         global_change_flag=1;
                                                         }
                                                   }
                                               }
                                         }
                                      }
                                   }
                                  }

////Block fixed
                                 clear_flag=0;
                                   for(i=1;i<10;i++)
                                     {
                                       for(j=1;j<10;j++)
                                            {
                                             clear_flag=0;
                                             if((i!=r) || (j!=cl))
                                               {
                                                if(table[bx][i][j][0]==2)
                                                   {
                                                    for(jj=1;jj<10;jj++)
                                                     {
                                                      tempx2 = table[bx][i][j][jj];
                                                       if(tempx2==store[1])
                                                         {
                                                         clear_flag++;
                                                         }
                                                       if(tempx2==store[2])
                                                         {
                                                         clear_flag++;
                                                         }
                                                    crb1=i;
                                                    crb2=j;
                                                     }
                                                   }
                                                 }
                                            if(clear_flag==2)
                                            break;
                                               }
                                        if(clear_flag==2)
                                        break;
                                        }


                              if(clear_flag==2)
                                 {
                                 clear_flag=0;
                                 for(i=1;i<10;i++)
                                   {
                                    for(j=1;j<10;j++)
                                      {
                                         if(((i!=r)||(j!=cl)))
                                          {
                                           if(((i!=crb1)||(j!=crb2)))
                                            {
                                             if(table[bx][i][j][0]>0)
                                               {
                                                 for(jj=1;jj<10;jj++)
                                                   {
                                                   tempx2 = table[bx][i][j][jj];
                                                       if(tempx2==store[1])
                                                         {
                                                         table[bx][i][j][jj]=0;
                                                         table[bx][i][j][0]=table[bx][i][j][0]-1;
                                                         change_flag=1;
                                                         global_change_flag=1;
                                                         }
                                                       if(tempx2==store[2])
                                                         {
                                                         table[bx][i][j][jj]=0;
                                                         table[bx][i][j][0]=table[bx][i][j][0]-1;
                                                         change_flag=1;
                                                         global_change_flag=1;
                                                         }
                                                   }
                                               }
                                             }
                                          }
                                      }
                                   }
                                  }

     

                }

             
              if(cx==3)
                {
                bx++;
                cx=0;
                }
         }

     if(rx==3)
       {
       rx=0;
       }
     else
       {
       bx=bx-3;
       }
    }
loop_count++;
}
return global_change_flag;
}

function calculate_sudoku_unsolved_count (table)
{
var rx=0;
var cx=0;
var bx=1;
var r,cl,z;
var count=0;
    for (r=1; r<10; r++)
    {
      rx++;
      for(cl=1;cl<10;cl++)
        {
                cx++;
              if(table[bx][r][cl][0]>0)
                {
                count=count+table[bx][r][cl][0];
                }
     
              if(cx==3)
                {
                bx++;
                cx=0;
                }
         }

     if(rx==3)
       {
       rx=0;
       }
     else
       {
       bx=bx-3;
       }
    }
return count;
}

function copy_table(table, table_copy)
{
var rx=0;
var cx=0;
var bx=1;
var r,cl,z;
    for (r=1; r<10; r++)
    {
      rx++;
      for(cl=1;cl<10;cl++)
        {
                cx++;
                for(var z=0;z<10;z++)
                 {
                  table_copy[bx][r][cl][z]=table[bx][r][cl][z]; 
                 }

             
              if(cx==3)
                {
                bx++;
                cx=0;
                }
         }

     if(rx==3)
       {
       rx=0;
       }
     else
       {
       bx=bx-3;
       }
    }
}


function sudoku_solver_advanced(table, table_copy,global_change_flag)
{
var rx=0;
var cx=0;
var bx=1;
var r,cl,z;
var unsolved_count=0;
var error_flag=0;

    for (r=1; r<10; r++)
    {
      rx++;
      for(cl=1;cl<10;cl++)
        {
                cx++;
                if(table[bx][r][cl][0]==2)
                {
                 for(var z=1;z<10;z++)
                 {
                  copy_table(table,table_copy);
                  if(table[bx][r][cl][z]>0) 
                  {
                  table_copy[bx][r][cl][0]=1;
                    for(var ix=1;ix<10;ix++)
                     {
                       if(ix==table[bx][r][cl][z])
                       {
                       table_copy[bx][r][cl][z]=table[bx][r][cl][z];
                       }
                       else
                       {
                       table_copy[bx][r][cl][z]=0;
                       }
                     }
                  }
                  
                   global_change_flag[0]=1;
                   unsolved_count=0;
                   error_flag=0;
                   sudoku_solver_basic(table_copy,global_change_flag);
                   unsolved_count=calculate_sudoku_unsolved_count(table_copy);
                   error_flag=verify_sudoku(table_copy);

                  if(unsolved_count==81 && error_flag==0)
                  break;
                 }
                }

             
              if(cx==3)
                {
                bx++;
                cx=0;
                }
         if(unsolved_count==81 && error_flag==0)
         break;
         }

     if(rx==3)
       {
       rx=0;
       }
     else
       {
       bx=bx-3;
       }
    if(unsolved_count==81 && error_flag==0)
    break;
    }

}

function ResetGrid()
                 {

                    document.getElementById("element11").value = "";
                    document.getElementById("element12").value = "";
                    document.getElementById("element13").value = "";
                    document.getElementById("element14").value = "";
                    document.getElementById("element15").value = "";
                    document.getElementById("element16").value = "";
                    document.getElementById("element17").value = "";
                    document.getElementById("element18").value = "";
                    document.getElementById("element19").value = "";

                    document.getElementById("element21").value = "";
                    document.getElementById("element22").value = "";
                    document.getElementById("element23").value = "";
                    document.getElementById("element24").value = "";
                    document.getElementById("element25").value = "";
                    document.getElementById("element26").value = "";
                    document.getElementById("element27").value = "";
                    document.getElementById("element28").value = "";
                    document.getElementById("element29").value = "";

                    document.getElementById("element31").value = "";
                    document.getElementById("element32").value = "";
                    document.getElementById("element33").value = "";
                    document.getElementById("element34").value = "";
                    document.getElementById("element35").value = "";
                    document.getElementById("element36").value = "";
                    document.getElementById("element37").value = "";
                    document.getElementById("element38").value = "";
                    document.getElementById("element39").value = "";

                    document.getElementById("element41").value = "";
                    document.getElementById("element42").value = "";
                    document.getElementById("element43").value = "";
                    document.getElementById("element44").value = "";
                    document.getElementById("element45").value = "";
                    document.getElementById("element46").value = "";
                    document.getElementById("element47").value = "";
                    document.getElementById("element48").value = "";
                    document.getElementById("element49").value = "";

                    document.getElementById("element51").value = "";
                    document.getElementById("element52").value = "";
                    document.getElementById("element53").value = "";
                    document.getElementById("element54").value = "";
                    document.getElementById("element55").value = "";
                    document.getElementById("element56").value = "";
                    document.getElementById("element57").value = "";
                    document.getElementById("element58").value = "";
                    document.getElementById("element59").value = "";

                    document.getElementById("element61").value = "";
                    document.getElementById("element62").value = "";
                    document.getElementById("element63").value = "";
                    document.getElementById("element64").value = "";
                    document.getElementById("element65").value = "";
                    document.getElementById("element66").value = "";
                    document.getElementById("element67").value = "";
                    document.getElementById("element68").value = "";
                    document.getElementById("element69").value = "";

                    document.getElementById("element71").value = "";
                    document.getElementById("element72").value = "";
                    document.getElementById("element73").value = "";
                    document.getElementById("element74").value = "";
                    document.getElementById("element75").value = "";
                    document.getElementById("element76").value = "";
                    document.getElementById("element77").value = "";
                    document.getElementById("element78").value = "";
                    document.getElementById("element79").value = "";

                    document.getElementById("element81").value = "";
                    document.getElementById("element82").value = "";
                    document.getElementById("element83").value = "";
                    document.getElementById("element84").value = "";
                    document.getElementById("element85").value = "";
                    document.getElementById("element86").value = "";
                    document.getElementById("element87").value = "";
                    document.getElementById("element88").value = "";
                    document.getElementById("element89").value = "";

                    document.getElementById("element91").value = "";
                    document.getElementById("element92").value = "";
                    document.getElementById("element93").value = "";
                    document.getElementById("element94").value = "";
                    document.getElementById("element95").value = "";
                    document.getElementById("element96").value = "";
                    document.getElementById("element97").value = "";
                    document.getElementById("element98").value = "";
                    document.getElementById("element99").value = "";




                    document.getElementById("o_element11").value = "";
                    document.getElementById("o_element12").value = "";
                    document.getElementById("o_element13").value = "";
                    document.getElementById("o_element14").value = "";
                    document.getElementById("o_element15").value = "";
                    document.getElementById("o_element16").value = "";
                    document.getElementById("o_element17").value = "";
                    document.getElementById("o_element18").value = "";
                    document.getElementById("o_element19").value = "";

                    document.getElementById("o_element21").value = "";
                    document.getElementById("o_element22").value = "";
                    document.getElementById("o_element23").value = "";
                    document.getElementById("o_element24").value = "";
                    document.getElementById("o_element25").value = "";
                    document.getElementById("o_element26").value = "";
                    document.getElementById("o_element27").value = "";
                    document.getElementById("o_element28").value = "";
                    document.getElementById("o_element29").value = "";

                    document.getElementById("o_element31").value = "";
                    document.getElementById("o_element32").value = "";
                    document.getElementById("o_element33").value = "";
                    document.getElementById("o_element34").value = "";
                    document.getElementById("o_element35").value = "";
                    document.getElementById("o_element36").value = "";
                    document.getElementById("o_element37").value = "";
                    document.getElementById("o_element38").value = "";
                    document.getElementById("o_element39").value = "";

                    document.getElementById("o_element41").value = "";
                    document.getElementById("o_element42").value = "";
                    document.getElementById("o_element43").value = "";
                    document.getElementById("o_element44").value = "";
                    document.getElementById("o_element45").value = "";
                    document.getElementById("o_element46").value = "";
                    document.getElementById("o_element47").value = "";
                    document.getElementById("o_element48").value = "";
                    document.getElementById("o_element49").value = "";

                    document.getElementById("o_element51").value = "";
                    document.getElementById("o_element52").value = "";
                    document.getElementById("o_element53").value = "";
                    document.getElementById("o_element54").value = "";
                    document.getElementById("o_element55").value = "";
                    document.getElementById("o_element56").value = "";
                    document.getElementById("o_element57").value = "";
                    document.getElementById("o_element58").value = "";
                    document.getElementById("o_element59").value = "";

                    document.getElementById("o_element61").value = "";
                    document.getElementById("o_element62").value = "";
                    document.getElementById("o_element63").value = "";
                    document.getElementById("o_element64").value = "";
                    document.getElementById("o_element65").value = "";
                    document.getElementById("o_element66").value = "";
                    document.getElementById("o_element67").value = "";
                    document.getElementById("o_element68").value = "";
                    document.getElementById("o_element69").value = "";

                    document.getElementById("o_element71").value = "";
                    document.getElementById("o_element72").value = "";
                    document.getElementById("o_element73").value = "";
                    document.getElementById("o_element74").value = "";
                    document.getElementById("o_element75").value = "";
                    document.getElementById("o_element76").value = "";
                    document.getElementById("o_element77").value = "";
                    document.getElementById("o_element78").value = "";
                    document.getElementById("o_element79").value = "";

                    document.getElementById("o_element81").value = "";
                    document.getElementById("o_element82").value = "";
                    document.getElementById("o_element83").value = "";
                    document.getElementById("o_element84").value = "";
                    document.getElementById("o_element85").value = "";
                    document.getElementById("o_element86").value = "";
                    document.getElementById("o_element87").value = "";
                    document.getElementById("o_element88").value = "";
                    document.getElementById("o_element89").value = "";

                    document.getElementById("o_element91").value = "";
                    document.getElementById("o_element92").value = "";
                    document.getElementById("o_element93").value = "";
                    document.getElementById("o_element94").value = "";
                    document.getElementById("o_element95").value = "";
                    document.getElementById("o_element96").value = "";
                    document.getElementById("o_element97").value = "";
                    document.getElementById("o_element98").value = "";
                    document.getElementById("o_element99").value = "";

}

function ResetGrid_OUT()
                 {
                    document.getElementById("o_element11").value = "";
                    document.getElementById("o_element12").value = "";
                    document.getElementById("o_element13").value = "";
                    document.getElementById("o_element14").value = "";
                    document.getElementById("o_element15").value = "";
                    document.getElementById("o_element16").value = "";
                    document.getElementById("o_element17").value = "";
                    document.getElementById("o_element18").value = "";
                    document.getElementById("o_element19").value = "";

                    document.getElementById("o_element21").value = "";
                    document.getElementById("o_element22").value = "";
                    document.getElementById("o_element23").value = "";
                    document.getElementById("o_element24").value = "";
                    document.getElementById("o_element25").value = "";
                    document.getElementById("o_element26").value = "";
                    document.getElementById("o_element27").value = "";
                    document.getElementById("o_element28").value = "";
                    document.getElementById("o_element29").value = "";

                    document.getElementById("o_element31").value = "";
                    document.getElementById("o_element32").value = "";
                    document.getElementById("o_element33").value = "";
                    document.getElementById("o_element34").value = "";
                    document.getElementById("o_element35").value = "";
                    document.getElementById("o_element36").value = "";
                    document.getElementById("o_element37").value = "";
                    document.getElementById("o_element38").value = "";
                    document.getElementById("o_element39").value = "";

                    document.getElementById("o_element41").value = "";
                    document.getElementById("o_element42").value = "";
                    document.getElementById("o_element43").value = "";
                    document.getElementById("o_element44").value = "";
                    document.getElementById("o_element45").value = "";
                    document.getElementById("o_element46").value = "";
                    document.getElementById("o_element47").value = "";
                    document.getElementById("o_element48").value = "";
                    document.getElementById("o_element49").value = "";

                    document.getElementById("o_element51").value = "";
                    document.getElementById("o_element52").value = "";
                    document.getElementById("o_element53").value = "";
                    document.getElementById("o_element54").value = "";
                    document.getElementById("o_element55").value = "";
                    document.getElementById("o_element56").value = "";
                    document.getElementById("o_element57").value = "";
                    document.getElementById("o_element58").value = "";
                    document.getElementById("o_element59").value = "";

                    document.getElementById("o_element61").value = "";
                    document.getElementById("o_element62").value = "";
                    document.getElementById("o_element63").value = "";
                    document.getElementById("o_element64").value = "";
                    document.getElementById("o_element65").value = "";
                    document.getElementById("o_element66").value = "";
                    document.getElementById("o_element67").value = "";
                    document.getElementById("o_element68").value = "";
                    document.getElementById("o_element69").value = "";

                    document.getElementById("o_element71").value = "";
                    document.getElementById("o_element72").value = "";
                    document.getElementById("o_element73").value = "";
                    document.getElementById("o_element74").value = "";
                    document.getElementById("o_element75").value = "";
                    document.getElementById("o_element76").value = "";
                    document.getElementById("o_element77").value = "";
                    document.getElementById("o_element78").value = "";
                    document.getElementById("o_element79").value = "";

                    document.getElementById("o_element81").value = "";
                    document.getElementById("o_element82").value = "";
                    document.getElementById("o_element83").value = "";
                    document.getElementById("o_element84").value = "";
                    document.getElementById("o_element85").value = "";
                    document.getElementById("o_element86").value = "";
                    document.getElementById("o_element87").value = "";
                    document.getElementById("o_element88").value = "";
                    document.getElementById("o_element89").value = "";

                    document.getElementById("o_element91").value = "";
                    document.getElementById("o_element92").value = "";
                    document.getElementById("o_element93").value = "";
                    document.getElementById("o_element94").value = "";
                    document.getElementById("o_element95").value = "";
                    document.getElementById("o_element96").value = "";
                    document.getElementById("o_element97").value = "";
                    document.getElementById("o_element98").value = "";
                    document.getElementById("o_element99").value = "";

}
