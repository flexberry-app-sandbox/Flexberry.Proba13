﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч инф о зак.
    /// </summary>
    // *** Start programmer edit section *** (ТЧИнфОЗак CustomAttributes)

    // *** End programmer edit section *** (ТЧИнфОЗак CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч инф о зак")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧИнфОЗакE", new string[] {
            "Товары as \'Товары\'",
            "Товары.НаимТовара as \'Наим товара\'",
            "Количество as \'Количество\'",
            "Товары.ЕдИзм",
            "Товары.Масса",
            "Товары.Цена"}, Hidden=new string[] {
            "Товары.НаимТовара"})]
    [MasterViewDefineAttribute("ТЧИнфОЗакE", "Товары", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимТовара")]
    public class ТЧИнфОЗак : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Proba1.Товары fТовары;
        
        private IIS.Proba1.ДокумПостав fДокумПостав;
        
        // *** Start programmer edit section *** (ТЧИнфОЗак CustomMembers)

        // *** End programmer edit section *** (ТЧИнфОЗак CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ТЧИнфОЗак.Количество CustomAttributes)

        // *** End programmer edit section *** (ТЧИнфОЗак.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ТЧИнфОЗак.Количество Get start)

                // *** End programmer edit section *** (ТЧИнфОЗак.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ТЧИнфОЗак.Количество Get end)

                // *** End programmer edit section *** (ТЧИнфОЗак.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧИнфОЗак.Количество Set start)

                // *** End programmer edit section *** (ТЧИнфОЗак.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ТЧИнфОЗак.Количество Set end)

                // *** End programmer edit section *** (ТЧИнфОЗак.Количество Set end)
            }
        }
        
        /// <summary>
        /// Т ч инф о зак.
        /// </summary>
        // *** Start programmer edit section *** (ТЧИнфОЗак.Товары CustomAttributes)

        // *** End programmer edit section *** (ТЧИнфОЗак.Товары CustomAttributes)
        [PropertyStorage(new string[] {
                "Товары"})]
        [NotNull()]
        public virtual IIS.Proba1.Товары Товары
        {
            get
            {
                // *** Start programmer edit section *** (ТЧИнфОЗак.Товары Get start)

                // *** End programmer edit section *** (ТЧИнфОЗак.Товары Get start)
                IIS.Proba1.Товары result = this.fТовары;
                // *** Start programmer edit section *** (ТЧИнфОЗак.Товары Get end)

                // *** End programmer edit section *** (ТЧИнфОЗак.Товары Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧИнфОЗак.Товары Set start)

                // *** End programmer edit section *** (ТЧИнфОЗак.Товары Set start)
                this.fТовары = value;
                // *** Start programmer edit section *** (ТЧИнфОЗак.Товары Set end)

                // *** End programmer edit section *** (ТЧИнфОЗак.Товары Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Proba1.ДокумПостав.
        /// </summary>
        // *** Start programmer edit section *** (ТЧИнфОЗак.ДокумПостав CustomAttributes)

        // *** End programmer edit section *** (ТЧИнфОЗак.ДокумПостав CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ДокумПостав"})]
        public virtual IIS.Proba1.ДокумПостав ДокумПостав
        {
            get
            {
                // *** Start programmer edit section *** (ТЧИнфОЗак.ДокумПостав Get start)

                // *** End programmer edit section *** (ТЧИнфОЗак.ДокумПостав Get start)
                IIS.Proba1.ДокумПостав result = this.fДокумПостав;
                // *** Start programmer edit section *** (ТЧИнфОЗак.ДокумПостав Get end)

                // *** End programmer edit section *** (ТЧИнфОЗак.ДокумПостав Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧИнфОЗак.ДокумПостав Set start)

                // *** End programmer edit section *** (ТЧИнфОЗак.ДокумПостав Set start)
                this.fДокумПостав = value;
                // *** Start programmer edit section *** (ТЧИнфОЗак.ДокумПостав Set end)

                // *** End programmer edit section *** (ТЧИнфОЗак.ДокумПостав Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧИнфОЗакE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧИнфОЗакE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧИнфОЗакE", typeof(IIS.Proba1.ТЧИнфОЗак));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧИнфОЗак.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧИнфОЗак CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧИнфОЗак CustomAttributes)
    public class DetailArrayOfТЧИнфОЗак : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Proba1.DetailArrayOfТЧИнфОЗак members)

        // *** End programmer edit section *** (IIS.Proba1.DetailArrayOfТЧИнфОЗак members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧИнфОЗак by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧИнфОЗак.
        /// </summary>
        public DetailArrayOfТЧИнфОЗак(IIS.Proba1.ДокумПостав fДокумПостав) : 
                base(typeof(ТЧИнфОЗак), ((ICSSoft.STORMNET.DataObject)(fДокумПостав)))
        {
        }
        
        public IIS.Proba1.ТЧИнфОЗак this[int index]
        {
            get
            {
                return ((IIS.Proba1.ТЧИнфОЗак)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Proba1.ТЧИнфОЗак dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
